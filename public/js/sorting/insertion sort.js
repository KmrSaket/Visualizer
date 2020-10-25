/*
    *****************
    DONE BY:-   SAKET KUMAR
    E-MAIL:-    saket.kumar.null@gmail.com
    *****************
*/


/* ******************* INSERTION SORT ******************* */

function insertion_driver() {
  var t, temp;
  for (var i = 1; i < array.length; i++) {
    update_div_single(i, color2, array[i]); //select an element
    t = i;
    for (var j = i - 1; j >= 0; j--) {
      update_div_double(t, color2, array[t], j, color2, array[j],0); //compare
      if (array[t] < array[j]) {
        update_div_double(t, color3, array[t], j, color3, array[j]); //need to swap
        temp = array[t];
        array[t] = array[j];
        array[j] = temp;
        update_div_double(t, color5, array[t], j, color2, array[j]); //swaped
        t = j;
      } else {
        update_div_double(t, color5, array[t], j, color5, array[j]); //intermediate sorted
        break;
      }
      update_div_single(0, color5, array[0]);
    }

  }
  // display sorted array
  showSorted();
}
