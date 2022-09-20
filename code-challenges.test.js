// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.



// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// PC: Input is an array, that contains objects. Output will be an array of strings, composed of data from the objects with data 
//  the value from the key name will be capitalized, and inserted into a string, with the word "is" between the name value and the occupation value and a . at the end of the string. String interpolation used to access data, 
// How do I capitalize both names = .toUpperCase, but need to be able to access both names in string. 

// What will allow me to do an action to each value in array: iteration over the array

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
// PC: Input is an array containing numbers, strings and a boolean. Output will be an array containing only the numbers' remainder after being divided by 3. I know we will need to remove strings and booleans from the array, or isolate the numbers in a new array. Then use the modulo character to find and return the remainders after dividing by 3.
// 

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// PC: Input is an array of numbers, output is the sum of all of the numbers cubed. Create a function that iterates over the array, cubes each of the numbers (n * n * n), adds the cubed numbers and returns the sum.