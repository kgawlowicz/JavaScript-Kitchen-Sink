// name
let name = "Kimberly Gawlowicz"

// constant
const states = "50";

//  sum 2 numbers
let sum = (5 + 4);

console.log(name);
console.log(states);
console.log(sum);

function sayHello() {
    console.log("Hello World!");
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    } 
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John",17);


let favVeg = ["tomato", "cucumber", "lettuce"];
for (let i = 0; i < 3; ++i) {
    console.log(favVeg[i]);
}
console.log(favVeg[1]);
    
let myObj = {Kim: 51, Bruce: 52, Kennan: 21, Amanda: 18, Gabi: 9};
console.log(myObj);
console.log(myObj[0]);

// let i=1;
// while (i<4) {
//     checkAge("Kim",18);
//     i++;
// }

// let myObj = {Charles: 21, Abby: 27, James: 18, John: 17};
// let n = myObj.length;
// console.log("length of myObj is ", n)

