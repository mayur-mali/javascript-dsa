// in following programe we see how we can delete element in array

let data = [10, 47, 96, 37, 45, 36];

// method I
let position = 1;
console.log(data);

for (let i = position; i < data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);

// function for delete element in array

function deleteElement(position) {
  for (let i = position; i < data.length; i++) {
    if (position <= data.length) {
      data[i] = data[i + 1];
    } else {
      alert("enter valid entry");
    }
  }
  console.log(`modifyed array ${data.join(" ")}`);
}

deleteElement(0);
