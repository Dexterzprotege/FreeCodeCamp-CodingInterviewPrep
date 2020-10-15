/*Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.
Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.
Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.*/

function quick(arr, left, right){
  let key, i, j, temp;
  key = arr[left];
  i = left+1;
  j = right;
  if(left < right){
    while(i<j){
      while(key >= arr[i] && i < right)
        i++;
      while(key < arr[j] && j > left)
        j--;
      if(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let temp = arr[left];
    arr[left] = arr[j];
    arr[j] = temp;
    quick(arr, left, j-1);
    quick(arr, j+1, right);
  }
}
function quickSort(array) {
  // Only change code below this line
  quick(array, 0, array.length-1);
  return array;
  // Only change code above this line
}
