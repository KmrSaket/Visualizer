function bubbleSort(){
  if(i<size){
  for(var j=0; j<size-1; j++){
    if(array[j]>array[j+1]){
      var temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
    }
  }
  i++;
  }else{
    noLoop();
    // runAlgo = false;
  }
  // document.getElementById('population').disabled = false;
}
