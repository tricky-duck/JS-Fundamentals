//conditional statement

//if(condition){
// } else {
// }

var hour = 12
if (hour >=6 && hour <12){
    console.log("Good morning")
} else if (hour >=12 && hour < 18){
    console.log("Good afternoon")
} else {
    console.log("Good evening")
}


var legalAge = true
var resident = false

if (legalAge && resident){
    console.log("The customer is eligable for the driving licence")
} else {
    console.log("The customer is not eligable for the licence")
}