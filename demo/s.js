//
// var values;
// var l;
//
//
// // Update the current slider value (each time you drag the slider handle)
//
//
// function setup() {
// 	//frameRate();
//
//   var offsetHeight = document.getElementById('canvas').offsetHeight;
//   var offsetWidth = document.getElementById('canvas').offsetWidth;
//   var canvas = createCanvas(offsetWidth,offsetHeight);
//   canvas.parent('canvas');
//   var w = 200;
//   values = new Array(w);
//   for(let i=0; i<values.length; i++){
//     values[i] = random(height);
//   }
//   l = values.length;
// }
// var i = 0, j = 0;
//
// var clicked = false;
// var option;
//
// function start(){
//   clicked = true;
//   option = document.getElementById('sorting').value;
// }
//
// function draw() {
//   if (clicked && option == "bubble") {
//     background(100,255,0);
//
//     if(i<l){
//
//   	for(var j=0; j<l-1; j++){
//   		if(values[j]>values[j+1]){
//   			var temp = values[j];
//   			values[j] = values[j+1];
//   			values[j+1] = temp;
//   		}
//   	}
//   	i++;
//     }else{
//   	  noLoop();
//     }
//
//     for(let n=0; n<values.length; n++){
//   		stroke(255);
//       line(n,height-values[n],n,height);
//     }
//     sleep(20);
//   }
// }
