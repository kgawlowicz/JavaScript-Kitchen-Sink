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
console.log(favVeg);
console.log(favVeg[1]);
console.log(favVeg.length);

let person = {
    name: 'John',
    age: 18,
    address: {
        street: '123 Main St',
        city: 'Birmingham',
        state: 'AL'
    }
}    
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.address.street);


let ckperson = {
    names: ['Amy', 'Suzy', 'Jenny','Kim','Wendy'],
    ages: [18, 20, 21, 51, 47]
    }

    console.log(ckperson);
    console.log(ckperson.names[0]);
    console.log(ckperson.ages[0]);
    
    for (let i = 0; i < ckperson.names.length; ++i) {
        console.log('testing loop');

        checkAge(ckperson.names[i], ckperson.ages[i]);
    }

function cklength(word) {
    return word.length;
}

let wordLength = cklength('Hello world');
console.log(wordLength);

if (wordLength % 2 === 0) {
    console.log('Even');
} else{
    console.log("Odd")
}
