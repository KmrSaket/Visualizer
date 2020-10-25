/*
    *****************
    DONE BY:-   SAKET KUMAR
    E-MAIL:-    saket.kumar.null@gmail.com
    *****************
*/


/* ******************* BUBBLE SORT ******************* */

function bubble_sort() {
  var outer, inner, temp;
  for (var outer = 0; outer < array.length; outer++) {
    for (var inner = 0; inner < array.length - outer - 1; inner++) {
      update_div_double(inner, color2, array[inner], inner + 1, color2, array[inner + 1]); //checking
      if (array[inner] > array[inner + 1]) {
        update_div_double(inner, color3, array[inner], inner + 1, color3, array[inner + 1]); //need to swap
        temp = array[inner];
        array[inner] = array[inner + 1];
        array[inner + 1] = temp;
      }
      update_div_double(inner, color1, array[inner], inner + 1, color1, array[inner + 1]); //either swap or no swap (reset color)
    }
    update_div_single(array.length - outer - 1, color5, array[array.length - outer - 1]); //colour correctly placed element
  }

  // display sorted array
  showSorted();
}
