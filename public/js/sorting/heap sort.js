/*
    *****************
    DONE BY:-   SAKET KUMAR
    E-MAIL:-    saket.kumar.null@gmail.com
    *****************
*/


/* ******************* HEAP SORT ******************* */

function heap_sort() {
  //building MAX-Heap
  for (var i = Math.ceil(array.length / 2) - 1; i >= 0; i--) {
    heapify(i, array.length);
  }

  // display max heap before sorting
  for (var i = 0; i < array.length - 1; i++) {
    update_div_single(i, color2b, array[i], 20);
  }
  update_div_single(array.length - 1, color2b, array[array.length - 1], 20);

  //swap and reduce array size
  for (var i = array.length - 1; i > 0; i--) {
    update_div_double(i, color3, array[i], 0, color3, array[0]); // need to swap
    var temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    update_div_double(0, color2b, array[0], i, color5, array[i]); //intermediate sorted
    heapify(0, i, color2b);
  }

  // display sorted array
  showSorted();
}

function heapify(q, size, color = color1) {
  console.log(color);
  var largest = q;
  var leftchild = 2 * q + 1;
  var rightchild = 2 * q + 2;
  if (leftchild < size && array[leftchild] > array[largest]) {
    largest = leftchild;
  }
  if (rightchild < size && array[rightchild] > array[largest]) {
    largest = rightchild;
  }
  if (largest != q) {
    update_div_double(largest, color3, array[largest], q, color3, array[q]); // need to swap
    var temp = array[largest];
    array[largest] = array[q];
    array[q] = temp;
    update_div_double(largest, color, array[largest], q, color, array[q]); //swaped
    heapify(largest, size, color);
  }
}
