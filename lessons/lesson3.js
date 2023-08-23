//objects 

var customer = {
    firstName: "Ivan",
    lastName: "Petrov",
    cars: ["Volvo", "Toyota", "Tesla"]
}
console.log(customer.firstName, customer['lastName'], customer.cars[1])

//arrays

var car = ["WV", "Audi", "Hyundai"]
car[1] = "Fiat"
console.log(car[1])