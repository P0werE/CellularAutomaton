"use strict";
let WIDTH = 800;
let HEIGHT = 800;
let AMOUNT = 50;
let OFFSET = .000008;
let INTERVAL = 1000 / Math.pow(AMOUNT, .5);



let CTX = null;
let GRID = null
let OTHERGRID = null;
let WOLFRAM_RULE = 110;
let GLOBAL_MODE = "WOLFRAM"



function applySetting(){
  let ctx = document.getElementById("canvas").getContext("2d");
  WIDTH = widthSelector()
  HEIGHT = heightSelector()
  INTERVAL = 1000/ refreshesSelector()
  AMOUNT = gridSelector()
  ctx.canvas.width = WIDTH
  ctx.canvas.height = HEIGHT
  CTX = ctx
}


function init() {
  applySetting()
  GRID = create2DGRID(AMOUNT)
  OTHERGRID = create2DGRID(AMOUNT)
  let mode = modeSelector()
  let ruleSet = ruleSelector()

  GLOBAL_MODE = mode
  switch (mode) {
    case "WOLFRAM":
      fillGrid(singleItemInField(), GRID)
      WOLFRAM_RULE = ruleSet
      break;
    case "GAME_OF_LIVE":
      fillGrid(random(), GRID)
      break;
  }
}


function reapply(){
  let a = iID !== null
  clearInterval(iID)
  applySetting()
  redraw()
  if (a) {
    iID = start()
  }
}


function redraw() {
  dropCanvas(CTX)
  drawGrid(CTX, GRID)
}

function singleItemInField() {
  return (x, y) => {
    let len = GRID.length - 1
    let pos = (len - (len % 2)) / 2
    return (pos === x && (y === len))
  }
}

function random() {
  return (x, y) => {
    let seed = Math.random()
    let val = Math.round(seed)
    return (val == 1)
  }
}

function dropCanvas(ctx) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.stroke();
}

function drawGrid(ctx, grid) {
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0,0,0,1)';
  const resolutionX = WIDTH / grid.length;
  const resolutionY = HEIGHT / grid.length;
  let drawOffset = 0;
  /*
  for (let i = resolutionX; i < WIDTH; i += resolutionX) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, HEIGHT);
  }
  for (let i = resolutionY; i < HEIGHT; i += resolutionY) {
    ctx.moveTo(0, i);
    ctx.lineTo(WIDTH, i);
  }*/

  grid.forEach((column, x) => {
    column.forEach((element, y) => {
      if (element) {
        ctx.fillRect(
          x * resolutionX - 1,
          y * resolutionY - 1,
          resolutionX - 1,
          resolutionY - 1)
      }
    })
  })
  ctx.moveTo(0, 0)
  ctx.stroke();
  ctx.closePath();
}

function create2DGRID(dimension) {
  let grid = []
  for (let i = 0; i < dimension; i++) {
    let tempGrid = []
    for (let j = 0; j < dimension; j++) {
      tempGrid.push(0)
    }
    grid.push(tempGrid)
  }
  return grid
}

function fillGrid(funct, grid) {
  grid.forEach(
    (column, x) => {
      column.forEach(
        (val, y) => {
          if (funct(x, y)) {
            grid[x][y] = 1
          } else {
            grid[x][y] = 0
          }
        }
      )
    }
  )
}

function update() {
  switch (GLOBAL_MODE) {
    case "WOLFRAM":
      wolfgang(WOLFRAM_RULE)
      break;
    case "GAME_OF_LIVE":
      gameOfLive()
      break;
  }
  redraw()
}

function reset() {
  stop()
  init()
  redraw()
}

let gameOfLive = () => {
  GRID.forEach((column, x) => {
    column.forEach((val, y) => {
      let neighborValue = (posX, posY, grid) => {
        let sum = 0 - grid[posX][posY]
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            let length = grid.length
            let x = (posX + i + length) % length
            let y = (posY + j + length) % length
            sum += grid[x][y]
          }
        }
        return sum
      }

      let value = neighborValue(x, y, GRID)
      OTHERGRID[x][y] = rules(val, value)
    })
  })
  let temp = GRID
  GRID = OTHERGRID
  OTHERGRID = temp
}



function rules(live, neighborValue) {
  let DIES = 0;
  let LIVES = 1;

  switch (true) {
    case live === 1:
      switch (true) {
        case (neighborValue < 2):
          return DIES;
          break;
        case (neighborValue == 2 || neighborValue == 3):
          return LIVES;
          break;
        case (neighborValue > 3):
          return DIES;
          break;
        default:
          return DIES;
      }
      break;
    case live === 0:
      switch (true) {
        case (neighborValue == 3):
          return LIVES
          break;
        default:
          return DIES;
      }
  }
  return DIES
}

function neighborWolfram(left, mid, right) {
  let array = [right, mid, left]
  const val = array.reduce((acc, val, index) =>
    Math.pow(2, index) * val + acc, 0)
  return val
}

function ruleWolfram(rule, value) {
  const LIVES = 1
  const DIES = 0
  if (rule > 256 || rule < 0) {
    alert("BAD RULESET ", rule)
    clearInterval(iID)
    return DIES
  }
  return toBinaryInt(rule)[value]
}

function toBinary(val) {
  let out = ""
  while (val > 0) {
    out = (val % 2) + out
    val -= val % 2
    val /= 2
  }
  return out
}

function toBinaryInt(val) {
  let out = []
  while (val > 0) {
    out.push(val % 2)
    val -= val % 2
    val /= 2
  }

  while (out.length < 8) {
    out.push(0)
  }
  return out
}

let wolfgang = (rule) => {
  for (let x = 0; x < GRID.length; x++) {
    for (let y = 1; y < (GRID.length); y++) {
      OTHERGRID[x][y - 1] = GRID[x][y]
    }
  }
  const index = (a, b) => {
    return (a + b + GRID.length) % GRID.length
  }
  for (let x = 0; x < GRID.length; x++) {
    let y = GRID.length - 1
    let left = GRID[index(x, -1)][y]
    let mid = GRID[index(x, 0)][y]
    let right = GRID[index(x, 1)][y]
    let sum = neighborWolfram(left, mid, right)
    let status = ruleWolfram(rule, sum)
    OTHERGRID[x][y] = status
  }
  let temp = GRID
  GRID = OTHERGRID
  OTHERGRID = temp
}

function start() {
  let id = setInterval(() => {
    update()
  }, INTERVAL);
  return id
}

function stop() {
  switch (stopButton.value) {
    case "STOP":
      stopButton.click()
      return true
      break;
    default:
      return false
  }
}

let iID = null
let stopButton = document.getElementById("stopButton")
stopButton.addEventListener("click", () => {
  switch (stopButton.value) {
    case "STOP":
      stopButton.value = "START"
      clearInterval(iID)
      iID = null
      break;
    case "START":
      stopButton.value = "STOP"
      iID = start()
    default:

  }
})
let resetButton = document.getElementById("resetButton")
resetButton.addEventListener("click", () => {
  reset()
})


let fetchId = (id) => { return document.getElementById(id)}
let fetchValue = (id) => { return fetchId(id).value}
let ruleSelector = () => {return fetchValue("ruleSet")}
let widthSelector = () => {return fetchValue("width")}
let heightSelector = () => {return fetchValue("height")}
let refreshesSelector = () => {return fetchValue("cycles")}
let gridSelector = () => {return fetchValue("grid-size")}
let modeSelector = () => {
  var radios = document.getElementsByName('mode');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      return radios[i].value
    }
  }
}


init()
redraw()
