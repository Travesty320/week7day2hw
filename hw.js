//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

console.log(person3['pizza'][0]);
console.log(person3['pizza'][1]);
console.log(person3['tacos']);
console.log(person3['burgers']);
console.log(person3['ice_cream'][0]);
console.log(person3['ice_cream'][1]);
console.log(person3['ice_cream'][2]);
console.log(person3['shakes']['oberwise']); //it doesnt want to show me the answer to this



  //i think this is what youre asking for. 
//not the top but i was trying to figure out how to print each individual key and value
for (property in person3){
    console.log(property);
};                            
console.log(Object.keys(person3));
console.log(Object.values(person3));

// 


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
// Use an arrow to create the printInfo method

this.printInfo = () => {
    console.log(`Hi my name is, ${this.name}, and I am ${this.age} years old`);
};
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

this.addAge = (p) => (this.age += p);

}

let person1 = new Person("Travis",33);
let person2 = new Person("Wade",1);

person1.printInfo();
person1.addAge(1);
person1.printInfo();
person1.addAge(1);
person1.printInfo();
person1.addAge(1);
person2.printInfo();
person2.addAge(1);


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function lengthOfString(strng){
const len = new Promise((resolve, reject) =>{
    if (strng.length >= 10){
        resolve("Big word");}
    else{
        reject("Small Number");
    }
});

len
    .then(value => {
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })};

lengthOfString("I hate backend stuff, except SQL!")
lengthOfString("seriously")


// codewars Problems


// Vowel count


// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let counter = 0
    const vowels = ["a", "e", "i", "o", "u"]
      for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
          counter++
        };
      };
      return counter
    };



    // Multiples of 3 or 5

//     If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){
    let prod = 0;
    for (var i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        prod += i;
      };
    };
    return prod;
  };
    