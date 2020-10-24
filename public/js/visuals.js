function final() {
  vizContainer.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    divs[i] = document.createElement("div");
    vizContainer.appendChild(divs[i]);
    divs[i].style = " margin:0% " + div_side_margin + "%; background-color:blue; width:" + (100 / population - (2 * div_side_margin)) + "%; height:" + array[i] + "%;";
    console.log(array[i]);
  }
}




let color1 = "#0055dd"; //initial
let color2 = "#9955dd"; //compare
let color3 = "#005500"; //need to swap
let color4 = "#000000"; //after swap
let color5 = "#ff000d"; //sorted
let color6 = "#00ff0d"; //sorted


// var interval_delay = -initial_delay;

var initial_delay;
var xx;


function update_div_single(bar, color, height,interval_delay=xx , last = 0) {
  window.setTimeout(
    function() {
      divs[bar].style = " margin:0% " + div_side_margin + "%; background-color:" + color + "; width:" + (100 / population - (2 * div_side_margin)) + "%; height:" + height + "%;";
      if (last==1) {
        enable_screen();
      }
    }, initial_delay += interval_delay);

}


function update_div_double(first_bar, first_color, first_height, second_bar, second_color, second_height,interval_delay=xx) {
  window.setTimeout(
    function() {
      divs[first_bar].style = " margin:0% " + div_side_margin + "%; background-color:" + first_color + "; width:" + (100 / population - (2 * div_side_margin)) + "%; height:" + first_height + "%;";
      divs[second_bar].style = " margin:0% " + div_side_margin + "%; background-color:" + second_color + "; width:" + (100 / population - (2 * div_side_margin)) + "%; height:" + second_height + "%;";
    }, initial_delay += interval_delay);

}
