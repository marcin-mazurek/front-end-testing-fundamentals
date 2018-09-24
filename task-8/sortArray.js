export default function sortArray(array) {
  if (!array || !array instanceof Array) {
    throw new TypeError('Invalid argument - expected a function');
  }

  var minIdx, temp, len = array.length;

  for (var i = 0; i < len; i++) {
    minIdx = i;

    for (var j = i+1; j < len; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }

    temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }
  
  return array;
}