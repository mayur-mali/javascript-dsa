// in following programe we see how we can search element in array

let data = [10, 47, 96, 37, 45, 36];
// method I
let index = undefined;
let element = 36;

for (let i = 0; i < data.length; i++) {
  if (data[i] === element) {
    index = i;
    break;
  }
}
console.log(index);

//function for search element in array
function searchElement(element) {
  let index = undefined;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === element) {
      index = i;
      console.log(`${element} element find on ${index} index of array`);
      break;
    } else {
      console.log(`${element} element not find in array`);
      return;
    }
  }
}

//searchElement(52)
