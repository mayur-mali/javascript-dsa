// in following programe we see how we can insert new element in loop without affecting existing array with differnt method's

let data = [10, 47, 96, 37, 45, 36];
console.log(data);

// method I manually
let position = 3;
let element = 100;
for (let i = data.length - 1; i >= 0; i--) {
  if (i >= position) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = element;
    }
  }
}
// here we insert 100 on 3rd position
console.log(data);

// function for insert new element in array

function insertElement(position, el) {
  for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = el;
      }
    }
  }
}

// here we give position and element for insert
insertElement(0, 555);
console.log(`modifyed array ${data}`);
