//loops
// for (statement1(where to start); statement2(how long to run); statement3(what to do after each cycle)){
// }

for (let i=0; i<5; i++){
    console.log('Hello World!'+i)
}

//ES5loop. for of loop

var cars = ["Volvo", "Toyota", "Tesla"]

for (let car of cars){
    console.log(car)
    if (car == "Toyota"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})