// in following programe we see how we can merge two array in new array

let array1 = [1, 96, 52, 7, 3, 75, 32];
let array2 = [75, 32, 78, 96, 45];
let array3 = [];
// method I
// for (let i = 0; i < array1.length; i++) {
//   array3[i] = array1[i];
// }
// for (let j = 0; j < array2.length; j++) {
//   array3[array1.length + j] = array2[j];
// }

//method II
// with the help of spread operators
array3 = [...array1, ...array2];

console.log(array3);
