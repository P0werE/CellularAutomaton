"use strict";

class RGB{
  constructor(r,g,b){
      this.r = r;
      this.g = g;
      this.b = b;
      this.string = "rgb("+this.values().join(", ") +")"
  }

  values(){
    return [this.r, this.g, this.b]
  }

  style(){
    return this.string
  }
}

const COLORS = {
  ALICE_BLUE: new RGB(240,248,255),
  ANTIQUE_WHITE: new RGB(250,235,215),
  AQUA: new RGB(0,255,255),
  AQUA_MARINE: new RGB(127,255,212),
  AZURE: new RGB(240,255,255),
  BEIGE: new RGB(245,245,220),
  BISQUE: new RGB(255,228,196),
  BLACK: new RGB(0,0,0),
  BLANCHED_ALMOND: new RGB(255,235,205),
  BLUE: new RGB(0,0,255),
  BLUE_VIOLET: new RGB(138,43,226),
  BROWN: new RGB(165,42,42),
  BURLY_WOOD: new RGB(222,184,135),
  CADET_BLUE: new RGB(95,158,160),
  CHART_REUSE: new RGB(127,255,0),
  CHOCOLATE: new RGB(210,105,30),
  CORAL: new RGB(255,127,80),
  CORN_FLOWER_BLUE: new RGB(100,149,237),
  CORN_SILK: new RGB(255,248,220),
  CRIMSON: new RGB(220,20,60),
  CYAN: new RGB(0,255,255),
  DARK_BLUE: new RGB(0,0,139),
  DARK_CYAN: new RGB(0,139,139),
  DARK_GOLDEN_ROD: new RGB(184,134,11),
  DARK_GREEN: new RGB(0,100,0),
  DARK_GREY: new RGB(169,169,169),
  DARK_KHAKI: new RGB(189,183,107),
  DARK_MAGENTA: new RGB(139,0,139),
  DARK_OLIVE_GREEN: new RGB(85,107,47),
  DARK_ORANGE: new RGB(255,140,0),
  DARK_ORCHID: new RGB(153,50,204),
  DARK_RED: new RGB(139,0,0),
  DARK_SALMON: new RGB(233,150,122),
  DARK_SEA_GREEN: new RGB(143,188,143),
  DARK_SLATE_BLUE: new RGB(72,61,139),
  DARK_SLATE_GRAY: new RGB(47,79,79),
  DARK_TURQUOISE: new RGB(0,206,209),
  DARK_VIOLET: new RGB(148,0,211),
  DEEP_PINK: new RGB(255,20,147),
  DEEP_SKY_BLUE: new RGB(0,191,255),
  DIM_GREY: new RGB(105,105,105),
  DODGER_BLUE: new RGB(30,144,255),
  FIREBRICK: new RGB(178,34,34),
  FLORAL_WHITE: new RGB(255,250,240),
  FOREST_GREEN: new RGB(34,139,34),
  GAINSBORO: new RGB(220,220,220),
  GHOST_WHITE: new RGB(248,248,255),
  GOLD: new RGB(255,215,0),
  GOLDEN_ROD: new RGB(218,165,32),
  GREEN: new RGB(0,128,0),
  GREEN_YELLOW: new RGB(173,255,47),
  GREY: new RGB(128,128,128),
  HONEYDEW: new RGB(240,255,240),
  HOT_PINK: new RGB(255,105,180),
  INDIAN_RED: new RGB(205,92,92),
  INDIGO: new RGB(75,0,130),
  IVORY: new RGB(255,255,240),
  KHAKI: new RGB(240,230,140),
  LAVENDER: new RGB(230,230,250),
  LAVENDER_BLUSH: new RGB(255,240,245),
  LAWN_GREEN: new RGB(124,252,0),
  LEMON_CHIFFON: new RGB(255,250,205),
  LIGHT_BLUE: new RGB(173,216,230),
  LIGHT_CORAL: new RGB(240,128,128),
  LIGHT_CYAN: new RGB(224,255,255),
  LIGHT_GOLDEN_ROD_YELLOW: new RGB(250,250,210),
  LIGHT_GREEN: new RGB(144,238,144),
  LIGHT_GREY: new RGB(211,211,211),
  LIGHT_PINK: new RGB(255,182,193),
  LIGHT_SALMON: new RGB(255,160,122),
  LIGHT_SEA_GREEN: new RGB(32,178,170),
  LIGHT_SKY_BLUE: new RGB(135,206,250),
  LIGHT_SLATE_GRAY: new RGB(119,136,153),
  LIGHT_STEEL_BLUE: new RGB(176,196,222),
  LIGHT_YELLOW: new RGB(255,255,224),
  LIME: new RGB(0,255,0),
  LIME_GREEN: new RGB(50,205,50),
  LINEN: new RGB(250,240,230),
  MAGENTA: new RGB(255,0,255),
  MAROON: new RGB(128,0,0),
  MEDIUM_AQUA_MARINE: new RGB(102,205,170),
  MEDIUM_BLUE: new RGB(0,0,205),
  MEDIUM_ORCHID: new RGB(186,85,211),
  MEDIUM_PURPLE: new RGB(147,112,219),
  MEDIUM_SEA_GREEN: new RGB(60,179,113),
  MEDIUM_SLATE_BLUE: new RGB(123,104,238),
  MEDIUM_SPRING_GREEN: new RGB(0,250,154),
  MEDIUM_TURQUOISE: new RGB(72,209,204),
  MEDIUM_VIOLET_RED: new RGB(199,21,133),
  MIDNIGHT_BLUE: new RGB(25,25,112),
  MINT_CREAM: new RGB(245,255,250),
  MISTY_ROSE: new RGB(255,228,225),
  MOCCASIN: new RGB(255,228,181),
  NAVAJO_WHITE: new RGB(255,222,173),
  NAVY: new RGB(0,0,128),
  OLD_LACE: new RGB(253,245,230),
  OLIVE: new RGB(128,128,0),
  OLIVE_DRAB: new RGB(107,142,35),
  ORANGE: new RGB(255,165,0),
  ORANGE_RED: new RGB(255,69,0),
  ORCHID: new RGB(218,112,214),
  PALE_GOLDEN_ROD: new RGB(238,232,170),
  PALE_GREEN: new RGB(152,251,152),
  PALE_TURQUOISE: new RGB(175,238,238),
  PALE_VIOLET_RED: new RGB(219,112,147),
  PAPAYA_WHIP: new RGB(255,239,213),
  PEACH_PUFF: new RGB(255,218,185),
  PERU: new RGB(205,133,63),
  PINK: new RGB(255,192,203),
  PLUM: new RGB(221,160,221),
  POWDER_BLUE: new RGB(176,224,230),
  PURPLE: new RGB(128,0,128),
  RED: new RGB(255,0,0),
  ROSY_BROWN: new RGB(188,143,143),
  ROYAL_BLUE: new RGB(65,105,225),
  SADDLE_BROWN: new RGB(139,69,19),
  SALMON: new RGB(250,128,114),
  SANDY_BROWN: new RGB(244,164,96),
  SEA_GREEN: new RGB(46,139,87),
  SEA_SHELL: new RGB(255,245,238),
  SIENNA: new RGB(160,82,45),
  SILVER: new RGB(192,192,192),
  SKY_BLUE: new RGB(135,206,235),
  SLATE_BLUE: new RGB(106,90,205),
  SLATE_GRAY: new RGB(112,128,144),
  SNOW: new RGB(255,250,250),
  SPRING_GREEN: new RGB(0,255,127),
  STEEL_BLUE: new RGB(70,130,180),
  TAN: new RGB(210,180,140),
  TEAL: new RGB(0,128,128),
  THISTLE: new RGB(216,191,216),
  TOMATO: new RGB(255,99,71),
  TURQUOISE: new RGB(64,224,208),
  VIOLET: new RGB(238,130,238),
  WHEAT: new RGB(245,222,179),
  WHITE: new RGB(255,255,255),
  WHITE_SMOKE: new RGB(245,245,245),
  YELLOW: new RGB(255,255,0),
  YELLOW_GREEN: new RGB(154,205,50),
}


const SETTINGS = {
  OFFSET: 0,
  EPSILON: 0.00001,
  BOX_OFFSET: -1,
  BACKGROUND: COLORS.BLACK.style(),
  WOLFRAM: COLORS.GREEN.style()
}



const STATE = [
  "ALIVE",
  "RESURRECTED",
  "DEAD"
]
const AutomatonSetting = {
  RULESET: [[],[]],
  RADIUS: 1,
  COLORS_FOR_STATE: [],
  STATES: [...STATE]
}

let GOF_RULESETS = [
  {
    NAME: "Game of Life",
    RULES: [[3],[2,3]],
    RADIUS: 1,
  },
  {
    NAME: "DECAY",
    RULES: [[3,4],[4,5]],
    RADIUS: 1,
  },
  {
    NAME:"Craters",
    RULES: [from(8,15),from(18,20)],
    RADIUS: 2,
  },
  {
    NAME:"cool",
    RULES: [[7,8,9,10],[7,8,9,10]],
    RADIUS: 2,
  },
  {
    NAME:"cool",
    RULES: [[3,4],[4,5,6]],
    RADIUS: 1,
  },
]



let rulss = 0

const GAMEOFLIFE_SETTINGS = {
  RULESET: GOF_RULESETS[rulss].RULES,
  RADIUS: GOF_RULESETS[rulss].RADIUS,
  COLORS_FOR_STATE: [COLORS.BLACK, new RGB(0,127,255), COLORS.BLUE],
  STATES: [...STATE]
}

class Automaton {
    constructor(pos, val, settings){
      this.pos = pos
      this.value = val
      this.state = val === 0 ? 0: settings.STATES.length-1
      this.settings = settings;
    }

    getState(){
      return this.state
    }

    getValue(){
      return this.value
    }

    setValue(nvalue){
      this.value = nvalue
    }

    getNeighbours(grid){
      let radius = this.settings.RADIUS
      let coord = []
      this.pos.forEach((coor, pos) => {
        let dim = []
        for(let i = radius*-1; i <= radius; i++ ){
          dim.push(index(coor, i, grid))
        }
        coord.push(dim)
      })
      return zip(coord)
    }

    isAlive(){
      return this.state > 0
    }

    setState(nState){
      this.state = nState
    }

    nextState() {
        let state = this.state
        switch(state){
          case 0:
            return 1
            break;
          case 1:
            return 2
            break
          case 2:
            return 2
            break;
          default:
        }
    }

    rules = (grid)=>{
      let newState = 0
      let newValue = 0
      let neighbours = this.getNeighbours(grid)
      let sum = neighbours.reduce((acc, val, idx, arr)=> {
        return acc + getCellAt.call(grid, val).getValue()
      }, -1*this.getValue())

      let offset = this.state === 0 ? 0 : 1
      let ruleset = this.settings.RULESET
      let rules = ruleset[offset]
      let found = false;
      rules.forEach((rule) => {
        found |= equal(rule, sum)
      })

      if(found) {
        newState = this.nextState()
        newValue = 1
      }
      return [newState, newValue]
    }

    update(){

    }

    color(){
      return this.settings.COLORS_FOR_STATE[this.state]
    }
}


// GAME PRESETS //-----------------------------------------------------------------
// -- GAME OF LIVE //-----------------------------------------------------------------
function updateGameOfLife() {
  let grid = getGrid()
  let other = getOGrid()
  let b = 0
  grid.forEach((row, x) => {
    row.forEach((val, y) => {
      let [newState, newValue] = val.rules(grid)
      let temp = other[x][y]
      temp.setState(newState)
      temp.setValue(newValue)
      other[x][y] = temp
    })
  })
  setGrid(other)
  setOtherGrid(grid)
}
//-- wolfram //-----------------------------------------------------------------

let wolfram = (rule, grid, otherGrid) => {
  let newGrid = otherGrid
  for (let x = 0; x < grid.length; x++) {
    for (let y = 1; y < (grid.length); y++) {
      newGrid[x][y - 1] = grid[x][y]
    }
  }
  for (let x = 0; x < grid.length; x++) {
    let y = grid.length - 1
    let left = grid[index(x, -1, grid)][y]
    let mid = grid[index(x, 0, grid)][y]
    let right = grid[index(x, 1, grid)][y]
    let sum = neighborWolfram(left, mid, right)
    let status = ruleWolfram(sum)
    newGrid[x][y] = status
  }
  return [newGrid, grid]
}

function neighborWolfram(left, mid, right) {
  let array = [right, mid, left]
  const val = array.reduce((acc, val, index) =>
    Math.pow(2, index) * val + acc, 0)
  return val
}

function ruleWolfram(sum) {
  let rule = ruleSelector()
  let bin = toBinaryInt(rule)
  return bin[sum]
}


// GRID //-----------------------------------------------------------------
function singleItemInField(grid) {
  return (x, y) => {
    let len = grid.length - 1
    let pos = (len - (len % 2)) / 2
    return (pos === x && (y === len))
  }
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
            grid[x][y] = funct(x, y)
          })
    })
}

function zip(list) {
  switch (list.length) {
    case 0:
      return []
    case 1:
      return list[0]
    default:
      let topList = list.shift()
      let newList = []
      let depth = zip(list)
      topList.forEach((val) => {
        depth.forEach((depth) => {
            newList.push([val].concat(depth))
        })
      })
      return newList
  }
}

function getCellAt(coordinates){
  let temp = this
  while (coordinates.length > 0) {
    temp = temp[coordinates.shift()]
  }
  return temp
}

// Helper //------------------------------------------------------------------------------------------
// TODO REFACTOR THIS SHIT
function updateOnMode(){
  let grid = getGrid()
  let other = getOGrid()
  let mode = modeSelector()
  let ruleset = ruleSelector()
  let newGrid, othernewGrid = null
  switch (mode) {
    case "WOLFRAM":
      [newGrid, othernewGrid] = wolfram(ruleset, grid, other)
      setGrid(newGrid)
      setOtherGrid(othernewGrid)
      break;
    case "GAME_OF_LIVE":
      updateGameOfLife()
      break;
  }
}

function modePreSets(mode) {
  switch (mode) {
    case "WOLFRAM":
      if(cleanCanvasSelector()){
      }else{
        fillGrid(singleItemInField(getGrid()), getGrid())
      }
      break;
    case "GAME_OF_LIVE":
      if(cleanCanvasSelector()){
        fillGrid((x,y) => {
          return new Automaton([x,y], 0,GAMEOFLIFE_SETTINGS)
        }, getGrid())

        fillGrid((x,y) => {
          return new Automaton([x,y], 0,GAMEOFLIFE_SETTINGS)
        }, getOGrid())
      } else {
        fillGrid((x,y) => {
          return new Automaton([x,y], myRandom()(),GAMEOFLIFE_SETTINGS)
        }, getGrid())

        fillGrid((x,y) => {
          return new Automaton([x,y], myRandom()() ,GAMEOFLIFE_SETTINGS)
        }, getOGrid())
      }

      // fillGrid(random(), getGrid())
      break;
  }
}
function myRandom() {
  return (x, y) => {
    let seed = Math.random()
    let val = Math.round(seed + SETTINGS.OFFSET)
    return Math.abs(val)
  }
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

function index(a, b, grid){
  return (a + b + grid.length) % grid.length
}

function equal(a, b){
 return  (Math.abs(a - b) < SETTINGS.EPSILON)
}


function from(a, b) {
  let c = []
  for(let i = a; i <= b; i++){
    c.push(i)
  }
  return c
}

// Setup //-------------------------------------------------------------------------------------------

function init() {
  let amount = gridSelector()
  let mode = modeSelector()
  updateCanvasSize()
  let grid = create2DGRID(amount)
  let other  = create2DGRID(amount)
  setGrid(grid)
  setOtherGrid(other)
  modePreSets(mode)
  return [grid, other]
}

// Cycle //-------------------------------------------------------------------------------------------

function start(interval) {
  let id = setInterval(() => {
      next()
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
function next(){update()}
function apply(){
  let a = iID !== null
  myClearInterval()
  resizeCanvas(getContext(), widthSelector(), heightSelector())
  draw()
  if (a) {
    setIntervalID(start(determineInterval()))
  }
}
function update() {
  updateOnMode()
  draw()
  nextRound()
}
function reset() {
  stop()
  init()
  draw()
  resetRound()
}

// Canvas //------------------------------------------------------------------------------------------

function updateCanvasSize(){
  resizeCanvas(getContext(), widthSelector(), heightSelector())
}

function getContext(){
  return document.getElementById("canvas").getContext("2d");
}

function resizeCanvas(ctx,x , y){
  ctx.canvas.width = x
  ctx.canvas.height = y
}

function draw() {
  let ctx = getContext()
  let grid = getGrid()
  dropCanvas(ctx)
  drawGrid(ctx, grid, ctx.canvas.width, ctx.canvas.height)
}

function drawGrid(ctx, grid, width, height) {
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0,0,0,1)';
  const resolutionX = width / grid.length;
  const resolutionY = height / grid.length;
  let drawOffset = 0;
  let v = grid[0][0] instanceof Automaton
  grid.forEach((column, x) => {
    column.forEach((element, y) => {
      if(v) {
        if(element.isAlive()){
          ctx.fillStyle = element.color().style()
          ctx.fillRect(
            x * resolutionX +  SETTINGS.BOX_OFFSET,
            y * resolutionY +  SETTINGS.BOX_OFFSET ,
            resolutionX  +     SETTINGS.BOX_OFFSET,
            resolutionY  +     SETTINGS.BOX_OFFSET)
            ctx.fillStyle = "black"
        }
      } else {
        if (element) {
          ctx.fillStyle = SETTINGS.WOLFRAM
          ctx.fillRect(
            x * resolutionX - 1,
            y * resolutionY - 1,
            resolutionX - 1,
            resolutionY - 1)
         ctx.fillStyle = "black"
        }
      }
    })
  })
  ctx.moveTo(0, 0)
  ctx.stroke();
  ctx.closePath();
}

function dropCanvas() {
  let ctx = getContext()
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = SETTINGS.BACKGROUND
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "black"
  ctx.stroke();
}

// HTML Queries //------------------------------------------------------------------------------------
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

let cleanCanvasSelector = () => {
  return fetchId("cleancanvas").checked
}

function modify(x,y){
  let cell = getCellAt.call(getGrid(), [x,y])
  if(cell instanceof Automaton) {
    if (cell.isAlive()) {
      cell.setValue(0)
      cell.setState(0)
    } else {
      cell.setValue(1)
      cell.setState(2)
    }
  } else {
    getGrid()[x][y] = (cell+1)%2
  }
  draw()
}


fetchId("canvas").addEventListener("click", (event) => {
  let width = widthSelector()
  let height = heightSelector()
  let size = gridSelector()
  let fieldWidth = width / size
  let fieldHeight = height / size
  let gridPosX = Math.floor(event.offsetX / fieldWidth )
  let gridPosY = Math.floor(event.offsetY / fieldHeight )
  modify(gridPosX, gridPosY)
})



let stopButton = fetchId("stopButton")
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

let resetButton = fetchId("resetButton")
resetButton.addEventListener("click", () => {
  reset(getGrid(), getOGrid())
})

// META FUNCTIONS    //--------------------------------------------------------------------------------------------
function setGrid(nGrid){grid = nGrid}
function setOtherGrid(oGrid) {  other = oGrid}
function setIntervalID(id) {  iID = id}
function getGrid(){return grid}
function getOGrid(){return other}
function getIntervalID(){return iID}
function myClearInterval(){
  clearInterval(getIntervalID())
  iID = null
}
function nextRound() {count++;}
function getRound(){ return count}
function resetRound(){ count=0}
let determineInterval = () =>  {return 1000/refreshesSelector()}

//  //--------------------------------------------------------------------------------------------
let grid = null
let other = null
let iID = null
let count = 0

init.call()
draw()
