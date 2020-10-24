var div_side_margin = 0.1;
var array = [];
var divs = [];
var population = document.getElementById('population').value;
var vizContainer = document.getElementById("vizholder");
var buttons = document.getElementsByName('button');
var algoSubType = document.getElementById('algoSubType');
var speedBtn = document.getElementsByName('speed');
var populationRange = document.getElementsByName('population');


function getAlgoSubType() {
  sortingName = algoSubType.value;
  // buttons[0].disabled = false;
  return sortingName;
}

// initializing array
function arrayinit() {
  for (var i = 0; i < population; i++) {
    array.push(Math.floor(Math.random() * 85) + 10);
    divs[i] = document.createElement("div");
    vizContainer.appendChild(divs[i]);
    divs[i].style = " margin:0% " + div_side_margin + "%; background-color:" + color1 + "; width:" + (100 / population - (2 * div_side_margin)) + "%; height:" + array[i] + "%;";
  }
}

function curpopulation() {
  vizContainer.innerHTML = "";
  population = document.getElementById('population').value;
  array.splice(0, array.length);
  arrayinit();
}

function getSpeed() {
  var radio = document.getElementsByName('speed');
  var speed;
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      speed = radio[i].value;
    }
  }
  return -1 * Math.pow(10, speed);
}

window.onload = function() {
  arrayinit();
}

function initializing() {
  initial_delay = getSpeed();
  xx = -initial_delay;
}

function enable_screen() {
  algoSubType.disabled = false;
  buttons[0].disabled = false;
  populationRange[0].disabled = false;
  for (var i = 0; i < speedBtn.length; i++) {
    speedBtn[i].disabled = false;
  }
}

function disable_screen() {
  algoSubType.disabled = true;
  buttons[0].disabled = true;
  populationRange[0].disabled = true;
  for (var i = 0; i < speedBtn.length; i++) {
    speedBtn[i].disabled = true;
  }
}


function reset() {
  location.reload();
}



function run() {

  switch (getAlgoSubType()) {
    case "bubble":
      disable_screen();
      initializing();
      bubble_sort();
      break;
    case "merge":
      disable_screen();
      initializing();
      merge_driver();
      break;
    case "insertion":
      disable_screen();
      initializing();
      insertion_driver();
      break;
    case "quick":
      disable_screen();
      initializing();
      quick_driver();
      break;
    case "selection":
      disable_screen();
      initializing();
      selection_sort();
      break;
    default:
      console.log("error");

  }
}



var canvasContainer = document.getElementById('canvas');
var h,w;
function setup() {

  h = canvasContainer.offsetHeight;
  w = canvasContainer.offsetWidth;
  var canvas = createCanvas(w,h);
  canvas.parent('canvas');
  background(230,235,239);
}

function draw() {
  // noFill();
  // ellipse(random(0,w),random(0,h),2);
  // ellipse(mouseX, mouseY, 25, 25);
}
function windowResized() {
  h = canvasContainer.offsetHeight;
  w = canvasContainer.offsetWidth;
  resizeCanvas(w,h);
  background(230,235,239);
}
