/*
    *****************
    DONE BY:-   SAKET KUMAR
    E-MAIL:-    saket.kumar.null@gmail.com
    *****************
*/


/* ******************* MERGE SORT ******************* */

// driver function
function merge_driver() {
  var arr_size = array.length;
  mergeSort(0, arr_size - 1);
  // display sorted array
  showSorted();
}

function merge(l, m, r) {
  var i, j, k;
  var n1 = m - l + 1;
  var n2 = r - m;
  var L = [];
  var R = [];
  var T = [];

  /* Copy data to temporary arrays L[] and R[] */
  for (i = 0; i < n1; i++)
    L.push(array[l + i]);

  for (j = 0; j < n2; j++)
    R.push(array[m + 1 + j]);


  /* Merge the temporary arrays back into T[]*/
  i = 0; // Initial index of first subarray
  j = 0; // Initial index of second subarray
  k = l; // Initial index of merged subarray
  while (i < n1 && j < n2) {
    update_div_double(l + i, color2, array[l + i], m + 1 + j, color2, array[m + 1 + j]); //checking
    update_div_double(l + i, color1, array[l + i], m + 1 + j, color1, array[m + 1 + j]);
    if (L[i] <= R[j]) {
      T.push(L[i]);
      i++;
    } else {
      T.push(R[j]);
      j++;
    }
  }

  /* Copy the remaining elements of L[], if there are any */
  while (i < n1) {
    update_div_single(l + i, color2, array[l + i]); //checking
    update_div_single(l + i, color1, array[l + i]);
    T.push(L[i]);
    i++;
  }

  /* Copy the remaining elements of R[], if there are any */
  while (j < n2) {
    update_div_single(m + 1 + j, color2, array[m + 1 + j]); //checking
    update_div_single(m + 1 + j, color1, array[m + 1 + j]);
    T.push(R[j]);
    j++;
  }

  /* Copy the temporary array T[] back into array[l...r] */
  for (var t = 0; t < T.length; t++) {
    array[k] = T[t];
    update_div_single(k, color5, array[k]); //intermediate sorted
    k++;
  }
}

function mergeSort(l, r) {
  if (l < r) {
    var m = Math.floor(l + (r - l) / 2);
    // Sort first and second halves
    mergeSort(l, m);
    mergeSort(m + 1, r);
    merge(l, m, r);
  }
}
