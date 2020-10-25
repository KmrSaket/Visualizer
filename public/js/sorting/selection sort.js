/*
    *****************
    DONE BY:-   SAKET KUMAR
    E-MAIL:-    saket.kumar.null@gmail.com
    *****************
*/


/* ******************* SELECTION SORT ******************* */

function selection_sort() {
  var min, temp, prevmin=-1;
  for (var i = 0; i < array.length; i++) {
    min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (prevmin !=1) update_div_double(min, color2, array[min],prevmin,color1,array[prevmin]);
      // update_div_single(min, color2, array[min],0 );
      update_div_single(j, color2b, array[j]);
      if (min != j - 1) {
        update_div_single(j - 1, color1, array[j - 1], 0);
      }
      if (array[j] < array[min]) {
        prevmin = min;
        update_div_single(min, color1, array[min]);
        min = j;
        // update_div_single(prevmin, color1, array[prevmin]);
        // update_div_single(min, color1, array[min],0);
      }

    }
    update_div_single(array.length - 1, color1, array[array.length]);
    update_div_double(min, color3, array[min], i, color3, array[i]); //need to swap
    temp = array[min];
    array[min] = array[i];
    array[i] = temp;
    update_div_double(min, color1, array[min], i, color5, array[i]); //intermediate sorted
  }

  // display sorted array
  showSorted();
}
