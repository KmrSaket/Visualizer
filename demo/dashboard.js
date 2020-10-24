var algoType;
var algoSubType;
var isAlgoRunning = false;

var array = [];

// initializing array
for (var i = 0; i < currentp; i++) {
  array.push(Math.floor(Math.random() * 300));
}

// get Algorithm type
function getAlgoType() {
  algoType = document.getElementById('algoType').value;
  if (algoType == "sort") {
    document.getElementById('algoSubType').style.visibility = "visible";
  } else {
    document.getElementById('algoSubType').style.visibility = "hidden";
  }
}

// get Sub Algorithm type
function getAlgoSubType() {
  algoSubType = document.getElementById('algoSubType').value;
  document.getElementById('populationcontainer').style.visibility = "visible";
}

// get current population and update array.
function curpopulation() {
  currentp = document.getElementById('population').value;
  array.splice(0, array.length);
  for (var i = 0; i < currentp; i++) {
    array.push(Math.floor(Math.random() * 400));
  }
}


var i;

// ACTION : NEXT onclicked
function run() {
  size = currentp;
  isAlgoRunning = true;
  document.getElementById('population').disabled = true;
  speed = 2;
}

var speed;
// p5.js built-in function
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvasholder');
}

var i = 0,
  j = 0;

// p5.js built-in function
function draw() {
  if (speed == 2) {
    frameRate(2);
  }
  background(100);
  var w = 400 / currentp;
  if (isAlgoRunning) {
    if (algoSubType == "bubble") {
      bubbleSort(); // TODO: pass array object and sort array by its value
    }

  }
  // display rectangles as per array values
  for (var k = 0; k < currentp; k++) {
    rect(w * k, 0, w, array[k]);
  }
}
