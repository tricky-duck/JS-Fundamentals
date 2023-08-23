//declarative function
helloOne()
function helloOne(){
    console.log("Hello One")
}

//anonymus function
var helloTwo = function(){
    console.log("Hello Two")
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree =() => {
    console.log("Hello Three")
}
helloThree()

//function with arguments
function printName(name){
    console.log(name)
}
printName('Mike')

//function with return
function multiplyByTwo(number){
    var result = number*2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

//import function
import { printAge } from "./helpers/printHelper.js"
printAge(32)

//import everything
import * as helper from '../lessons/helpers/printHelper.js'
helper.printAge(50)