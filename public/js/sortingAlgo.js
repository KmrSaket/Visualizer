function bubble_sort() {
  var outer, inner, temp;
  for (var outer = 0; outer < array.length; outer++) {
    for (var inner = 0; inner < array.length - outer - 1; inner++) {
      update_div_double(inner, color2, array[inner], inner + 1, color2, array[inner + 1]);
      if (array[inner] > array[inner + 1]) {
        update_div_double(inner, color3, array[inner], inner + 1, color3, array[inner + 1]);
        temp = array[inner];
        array[inner] = array[inner + 1];
        array[inner + 1] = temp;
        update_div_double(inner, color4, array[inner], inner + 1, color4, array[inner + 1]);
      }
      update_div_double(inner, color1, array[inner], inner + 1, color1, array[inner + 1]);
    }
    update_div_single(array.length - outer - 1, color5, array[array.length - outer - 1]);
  }

  for (var i = 0; i < array.length - 1; i++) {
    update_div_single(i, color6, array[i], 20);
  }
  update_div_single(array.length - 1, color6, array[array.length - 1], 20, 1);

}

// *********************************************************************************





function merge_driver() {
  var arr_size = array.length;
  mergeSort(0, arr_size - 1);
  // final();
  for (var i = 0; i < array.length - 1; i++) {
    update_div_single(i, color6, array[i], 20);
  }
  update_div_single(array.length - 1, color6, array[array.length - 1], 20, 1);
}

function merge(l, m, r) {
  var i, j, k;
  var n1 = m - l + 1;
  var n2 = r - m;
  var L = [];
  var R = [];
  var T = [];

  /* Copy data to temp arrays L[] and R[] */
  for (i = 0; i < n1; i++)
    L.push(array[l + i]);

  for (j = 0; j < n2; j++)
    R.push(array[m + 1 + j]);


  /* Merge the temp arrays back into arr[l..r]*/
  i = 0; // Initial index of first subarray
  j = 0; // Initial index of second subarray
  k = l; // Initial index of merged subarray
  while (i < n1 && j < n2) {
    update_div_double(l + i, color4, array[l + i], m + 1 + j, color4, array[m + 1 + j]);
    update_div_double(l + i, color1, array[l + i], m + 1 + j, color1, array[m + 1 + j]);
    if (L[i] <= R[j]) {
      T.push(L[i]);
      i++;
    } else {
      T.push(R[j]);
      j++;
    }
  }

  /* Copy the remaining elements of L[], if there
  are any */
  while (i < n1) {
    update_div_single(l + i, color4, array[l + i]);
    update_div_single(l + i, color1, array[l + i]);
    T.push(L[i]);
    i++;
  }

  /* Copy the remaining elements of R[], if there
  are any */
  while (j < n2) {
    update_div_single(m + 1 + j, color4, array[m + 1 + j]);
    update_div_single(m + 1 + j, color1, array[m + 1 + j]);
    T.push(R[j]);
    j++;
  }


  for (var t = 0; t < T.length; t++) {
    array[k] = T[t];
    update_div_single(k, color5, array[k]);
    k++;
  }
}

function mergeSort(l, r) {
  if (l < r) {
    // Same as (l+r)/2, but avoids overflow for
    // large l and h
    var m = Math.floor(l + (r - l) / 2);
    // Sort first and second halves
    mergeSort(l, m);
    mergeSort(m + 1, r);
    merge(l, m, r);
  }
}






// *********************************************************************************




function insertion_driver() {
  var t, temp;
  for (var i = 1; i < array.length; i++) {
    update_div_single(i, color2, array[i]);
    t = i;
    for (var j = i - 1; j >= 0; j--) {
      update_div_double(t, color4, array[t], j, color4, array[j]);
      if (array[t] < array[j]) {
        update_div_double(t, color5, array[t], j, color5, array[j]);
        temp = array[t];
        array[t] = array[j];
        array[j] = temp;
        update_div_double(t, color3, array[t], j, color2, array[j]);
        t = j;
      } else {
        update_div_double(t, color3, array[t], j, color3, array[j]);
        break;
      }

    }

  }
  update_div_single(0, color3, array[0], 0);
  for (var i = 0; i < array.length - 1; i++) {
    update_div_single(i, color6, array[i], 20);
  }
  update_div_single(array.length - 1, color6, array[array.length - 1], 20, 1);
}




// *********************************************************************************


function quick_driver() {
  quicksort(0, array.length - 1);
  for (var i = 0; i < array.length - 1; i++) {
    update_div_single(i, color6, array[i], 20);
  }
  update_div_single(array.length - 1, color6, array[array.length - 1], 20, 1);
}

function quicksort(p, r) {
  if (p <= r) {
    var q = partition(p, r);
    // update_div_single(q, color3, array[q]);
    quicksort(p, q - 1);
    quicksort(q + 1, r);

  }
}

function partition(p, r) {
  var i, temp;
  var pivot = r;
  update_div_single(pivot, color4, array[pivot]);
  i = p - 1;
  for (var j = p; j < r; j++) {
    // if (j != pivot) {

    if (j > p) {
      update_div_double(j - 1, color1, array[j - 1], j, color2, array[j]);
    } else {
      update_div_single(j, color2, array[j]);
    }
    // }

    if (array[j] < array[pivot]) {
      i++;

      if (i > p) {
        update_div_double(i - 1, color1, array[i - 1], i, color6, array[i]);
      } else {
        update_div_single(i, color6, array[i]);
      }

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      update_div_double(i, color6, array[i], j, color2, array[j]);
    }
    if (j == r - 1) {

      update_div_single(j, color1, array[j], 0);

    }
  }
  update_div_double(pivot, color5, array[pivot], i + 1, color5, array[i + 1]);
  temp = array[i + 1];
  array[i + 1] = array[pivot];
  array[pivot] = temp;
  update_div_double(pivot, color1, array[pivot], i + 1, color3, array[i + 1]);
  return i + 1;
}



// *********************************************************************************


function selection_sort() {
  var min,temp;
  for (var i = 0; i < array.length; i++) {
    min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
        update_div_single(j,color2,array[j],0);
        update_div_single(j,color1,array[j]);
      }
    }
    update_div_double(min,color4,array[min],i,color4,array[i],0);
    temp=array[min];
    array[min]=array[i];
    array[i]=temp;
    update_div_double(min,color1,array[min],i,color3,array[i]);
  }

  for (var i = 0; i < array.length - 1; i++) {
    update_div_single(i, color6, array[i], 20);
  }
  update_div_single(array.length - 1, color6, array[array.length - 1], 20, 1);
}
