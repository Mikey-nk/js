console.log("counting numbers from 0 to 5")

for (let i =5;i<=15; i+=2){
  console.log(i)
}
for (let e=10;e>1;e-=2){
  console.log(e)
}

console.log("for loop for an array")
const mycolours=["red","green","blue","yellow"];
for (let i=0;i<mycolours.length;i++){
  console.log(`colour at index${i}: ${mycolours[i]}`)
}


console.log("random numbers!");

const myNmbers = [1, 26, 39, 90, 5, 6];
myNmbers.sort((a, b) => a - b);
console.log("Sorted with built-in sort:", myNmbers);

const my_array = [90, 92, -93, 98, -83, 84, -94];

// Bubble Sort implementation
for (let i = 0; i < my_array.length; i++) {
  for (let j = 0; j < my_array.length - 1 - i; j++) {
    if (my_array[j] > my_array[j + 1]) {
      // Swap the elements
      let temp = my_array[j];
      my_array[j] = my_array[j + 1];
      my_array[j + 1] = temp;
    }
  }
}

