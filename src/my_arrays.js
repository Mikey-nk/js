const fruits =["Apples","Bananas","Oranges","Mangoes"]
const scores =[51,79,87,98,76,90]
const mixedbag =["Kenya",89,true,null]

console.log(fruits)
console.log(`my favourite fruit is ${fruits[1]}`)
fruits[3]="Watermelon"
console.log(fruits)
fruits.push("Pineapples")
console.log(fruits)
const lastfruit=fruits.pop()
console.log (lastfruit)
console.log(fruits)

console.log ("Foreach........ ")
scores.forEach ((score,index) => {

  console.log(`Item at index ${index} is ${score}`)
})
//map() method creates a new array by transforming every array
const numbers =[1,2,3,4,5,6]
console.log("map.....")
const double = numbers.map(number=>number*2)
console.log(double)
console.log(numbers)

// create a new array with only element thet pass a test

const num =[12,21,32,23,43,34,54,45]
const even =num.filter(num=>num%2===0)
console.log(even)