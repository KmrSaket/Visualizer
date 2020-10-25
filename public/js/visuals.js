function final() {
  vizContainer.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    divs[i] = document.createElement("div");
    vizContainer.appendChild(divs[i]);
    divs[i].style = " margin:0% " + div_side_margin + "%; background-color:blue; width:" + (100 / population - (2 * div_side_margin)) + "%; height:" + array[i] + "%;";
    console.log(array[i]);
  }
}




let color1 = "#A9A9A9"; //initial
let color2 = "#9955dd"; //checking
let color2b = "#99dd55"; //checking
let color3 = "#ff000d"; //need to swap
let color4 = "#808080"; //compare
let color5 = "#e5e500"; //intermediate sorted
let color6 = "#292F33"; //final sorted
let color7 = "#000000"; //pivot


// var interval_delay = -initial_delay;

var initial_delay;
var xx;


function update_div_single(bar, color, height, interval_delay = xx, last = 0) {
  window.setTimeout(
    function() {
      divs[bar].style = " margin:0% " + div_side_margin + "%; background-color:" + color + "; width:" + (100 / population - (2 * div_side_margin)) + "%; height:" + height + "%;";
      if (last == 1) {
        enable_screen();
      }
    }, initial_delay += interval_delay);

}


function update_div_double(first_bar, first_color, first_height, second_bar, second_color, second_height, interval_delay = xx) {
  window.setTimeout(
    function() {
      divs[first_bar].style = " margin:0% " + div_side_margin + "%; background-color:" + first_color + "; width:" + (100 / population - (2 * div_side_margin)) + "%; height:" + first_height + "%;";
      divs[second_bar].style = " margin:0% " + div_side_margin + "%; background-color:" + second_color + "; width:" + (100 / population - (2 * div_side_margin)) + "%; height:" + second_height + "%;";
    }, initial_delay += interval_delay);

}


function showSorted() {
  for (var i = 0; i < array.length - 1; i++) {
    update_div_single(i, color6, array[i], 20);
  }
  update_div_single(array.length - 1, color6, array[array.length - 1], 20, 1);
}


// class Ele {
//   x;
//   y;
//   constructor() {
// this.r=25;
//   }
//   update() {
//     this.x = 1500;
//     this.y = 100;
//   }
//   show() {
//     ellipse(this.x, this.y, this.r, this.r);
//   }
// }

// 
// var canvasContainer = document.getElementById('canvas');
// var h, w;
// let e;
// function setup() {
//
//   h = canvasContainer.offsetHeight;
//   w = canvasContainer.offsetWidth;
//   var canvas = createCanvas(w, h);
//   canvas.parent('canvas');
//   // e=new Ele();
//
// }
//
// function draw() {
//   noFill();
// background(230, 235, 239);
//   // e.update();
//   // e.show();
//   // ellipse(random(0,w),random(0,h),2);
//
// }

// function windowResized() {
//   h = canvasContainer.offsetHeight;
//   w = canvasContainer.offsetWidth;
//   resizeCanvas(w, h);
//   background(230, 235, 239);
// }
