//variables are declared using three keywords

import {addNumber} from './my_function.js';


var num3 =4
var name ="Michael"
var num4 =5
console.log(name);

let num5 =6
let name2 = "May"
console.log(name2)

const num6 =7
const name3="luke"
console.log(name3)

let my_school="emobilis"
console.log("i like going to "+my_school)

let num7=90
let num8=100
console.log(num7-num8)
console.log(num8+num7)
console.log(num7%num8)
console.log("the sum of "+num7,"and",num8 ,"is",num7 + num8)

const year = new Date().getFullYear()
console.log("The year ",year)

const year1 = new Date().setFullYear(2021,12,21)
console.log("the date ",year1)

let counter=6;
counter=counter + + 2;
console.log("the counter after increment is ",counter)

let results2 =addNumber(5,6)
console.log(results2);
