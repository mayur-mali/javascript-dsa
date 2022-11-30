// in following programe we see how we can sort array in acending order
const customSort = require("./array_prototypes/custom_sort_proto");
// we have unsorted array
var array = [10, 9, 9, 774, 853, 3, 7, 45, 8, 7, 6, 5, 4, 3, 2, 1];

// for (i = 0; i < array.length; i++) {
//   for (j = 0; j < array.length; j++) {
//     if (array[j] > array[j + 1]) {
//       let temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
// }

console.log("this" + array.customSort());
