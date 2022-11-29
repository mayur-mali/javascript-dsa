// in following programe we see how we can travers or loop through array with differnt method's

// define array
let data = [10, 47, 96, 37, 45, 36];

// method I
// this is most basic method
for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// method II
// for of method introduced in ES 2015
for (ele of data) {
  console.log(ele);
}
