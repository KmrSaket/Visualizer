/*
    *****************
    DONE BY:-   SAKET KUMAR
    E-MAIL:-    saket.kumar.null@gmail.com
    *****************
*/


/* ******************* QUICK SORT ******************* */

// driver function
function quick_driver() {
  quicksort(0, array.length - 1);
  // display sorted array
  showSorted();
}



function quicksort(p, r) {
  if (p <= r) {
    var q = partition(p, r);
    quicksort(p, q - 1);
    quicksort(q + 1, r);

  }
}



function partition(p, r) {
  var i, temp;
  var pivot = r;
  update_div_single(pivot, color7, array[pivot]);
  i = p - 1;
  for (var j = p; j<r; j++) {
    if (j > p) {
      update_div_double(j - 1, color1, array[j - 1], j, color2, array[j]);
    } else {
      update_div_single(j, color2, array[j]);
    }
    if (array[j] < array[pivot]) {
      i++;

      if (i > p) {
        update_div_double(i - 1, color1, array[i - 1], i, color2b, array[i]);
      } else {
        update_div_single(i, color2b, array[i]);
      }

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      update_div_double(i, color2b, array[i], j, color2, array[j]); //swaped
    }
    if (j == r - 1) {

      update_div_single(j, color1, array[j]);

    }
  }
  update_div_double(pivot, color3, array[pivot], i + 1, color3, array[i + 1]); //need to swap
  temp = array[i + 1];
  array[i + 1] = array[pivot];
  array[pivot] = temp;
  update_div_double(pivot, color1, array[pivot], i + 1, color5, array[i + 1]); //intermediate sorted
  return i + 1;
}
