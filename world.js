"use strict";

function updateCanvasSize(){
  resizeCanvas(getContext(), widthSelector(), heightSelector())
}

function getContext(){
  return document.getElementById("canvas").getContext("2d");
}

function init(amount, mode, ruleSet) {
  updateCanvasSize()
  let grid = create2DGRID(amount)
  let other  = create2DGRID(amount)
  switch (mode) {
    case "WOLFRAM":
      fillGrid(singleItemInField(grid), grid)
      break;
    case "GAME_OF_LIVE":
      fillGrid(random(), grid)
      break;
  }
  return [grid, other]
}


function resizeCanvas(ctx,x , y){
  ctx.canvas.width = x
  ctx.canvas.height = y
}


function apply(){
  let a = iID !== null
  myClearInterval()
  resizeCanvas(getContext(), widthSelector(), heightSelector())
  draw(getContext(), getGrid())
  if (a) {
    setIntervalID(start(determineInterval()))
  }
}

function draw(ctx, grid) {
  dropCanvas(ctx)
  drawGrid(ctx, grid, ctx.canvas.width, ctx.canvas.height)
}

function singleItemInField(grid) {
  return (x, y) => {
    let len = grid.length - 1
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
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.stroke();
}

function drawGrid(ctx, grid, width, height) {
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0,0,0,1)';
  const resolutionX = width / grid.length;
  const resolutionY = height / grid.length;
  let drawOffset = 0;

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

function create2DGRID(dimensionX, dimensionY) {
  if (!dimensionY) {
    dimensionY = dimensionX
  }
  let grid = []
  for (let i = 0; i < dimensionX; i++) {
    let tempGrid = []
    for (let j = 0; j < dimensionY; j++) {
      tempGrid.push(0)
    }
    grid.push(tempGrid)
  }
  return grid
}

function fillGrid(funct, grid) {
  grid.forEach((column, x) => {
      column.forEach((val, y) => {
            grid[x][y] = funct(x, y) ? 1 : 0
          })
    })
}

function updateOnMode(grid, other , mode, ruleset){
  let newGrid, othernewGrid = null
  switch (mode) {
    case "WOLFRAM":
      [newGrid, othernewGrid] = wolfgang(ruleset, grid, other)
      setGrid(newGrid)
      setOtherGrid(othernewGrid)
      break;
    case "GAME_OF_LIVE":
      [newGrid, othernewGrid] = gameOfLive(grid, other)
      setGrid(newGrid)
      setOtherGrid(othernewGrid)
      break;
  }
}

function update(grid, other, mode, ruleset) {
  updateOnMode(grid, other , mode, ruleset)
  draw(getContext(), getGrid())
}

function reset(grid, other) {
  stop()
  let x = init(...panelInfo())
  setGrid(x[0])
  setOtherGrid(x[1])

  draw(getContext(), getGrid())
}

let gameOfLive = (grid, other) => {
  let otherGrid = other
  grid.forEach((column, x) => {
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
      let value = neighborValue(x, y, grid)
      otherGrid[x][y] = rules(val, value)
    })
  })
  return  [otherGrid, grid]
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
    myClearInterval()
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

let wolfgang = (rule, grid, otherGrid) => {
  let newGrid = otherGrid
  for (let x = 0; x < grid.length; x++) {
    for (let y = 1; y < (grid.length); y++) {
      newGrid[x][y - 1] = grid[x][y]
    }
  }
  const index = (a, b, grid) => {
    return (a + b + grid.length) % grid.length
  }
  for (let x = 0; x < grid.length; x++) {
    let y = grid.length - 1
    let left = grid[index(x, -1, grid)][y]
    let mid = grid[index(x, 0, grid)][y]
    let right = grid[index(x, 1, grid)][y]
    let sum = neighborWolfram(left, mid, right)
    let status = ruleWolfram(rule, sum)
    newGrid[x][y] = status
  }
  return [newGrid, grid]
}

function start(interval) {
  let id = setInterval(() => {
      update(getGrid(), getOGrid(), modeSelector(), ruleSelector())
  }, interval);
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

let grid = null
let other = null
let iID = null

let stopButton = document.getElementById("stopButton")
stopButton.addEventListener("click", () => {
  switch (stopButton.value) {
    case "STOP":
      stopButton.value = "START"
      myClearInterval()
      break;
    case "START":
      stopButton.value = "STOP"
      setIntervalID(start(determineInterval()))
    default:
  }
})

let resetButton = document.getElementById("resetButton")
resetButton.addEventListener("click", () => {
  reset(getGrid(), getOGrid())
})

function newSet() {
  reset(getGrid(), getOGrid())
}

function setGrid(nGrid) {
  grid = nGrid
}
function setOtherGrid(oGrid) {
  other = oGrid
}
function setIntervalID(id) {
  iID = id
}
function getGrid(){
  return grid
}
function getOGrid(){
  return other
}

function getIntervalID(){
  return iID
}
function myClearInterval(){
  clearInterval(getIntervalID())
  iID = null
}




let determineInterval = () =>  {return 1000/refreshesSelector()}
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
let panelInfo = () => {return [gridSelector(), modeSelector(), ruleSelector()]}

[grid, other] = init(...panelInfo())
draw(getContext(), getGrid())
