console.log("while loop.....")

let counter=0
while (counter<10){
  console.log(`while loop ${ counter}`)
  counter++
}
let counter2=50
while(counter2>0){
  console.log(`while loop ${ counter2}`)
  counter2-=5
}
//for ...of loop
console.log("for...,of loop.....(iterating through an array)")

const fruits=["banana","cherry","mango","oranges","apples"]
for (const fruit of fruits){

}

console.log("for....of loop....(iterating through an string)")
const myname="michael"
for (const name of myname) {
  console.log(name)
}

console.log("for....in loop....(iterating through properties)")
const person={
  name:"John",
  age:25,
  city:"nairobi",

}
for (const key in person){
  if (Object.hasOwnProperty.call(person, key)){
    console.log(`person key ${key}, value: ${person[key]}`)
  }
}
