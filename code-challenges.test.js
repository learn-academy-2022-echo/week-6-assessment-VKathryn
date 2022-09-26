// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

describe("peopleCaps", () => {
    it("Takes in an array and returns the values capitalized, and returned in a sentence", () => {
      expect(peopleCaps(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]);
    });
  });

  // ReferenceError: peopleCaps is not defined GOOD FAIL
// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// PC: Input is an array, that contains objects. Output will be an array of strings, composed of data from the objects with data 
//  the value from the key name will be capitalized, and inserted into a string, with the word "is" between the name value and the occupation value and a "." at the end of the string. String interpolation used to access data, 
// How do I capitalize both names = .toUpperCase, but need to be able to access both names in string. 

// What will allow me to do an action to each value in array: map over the array
// Used .split to separate names in the string
// Used another .map to iterate over each split name
// value.charAt(0) -- selects only the character at the index of 0
// .toUppercase capitalizes the character
// + adds the capitalized character to the value that follows it
// value.slice(1) cuts the value beginning at the index of 1 (discards the previous)
// together this returns the sought after capitalized name. - CLOSE THE SECOND MAP
// STILL WITHIN FIRST MAP: .join(" ") is used to rejoin the first and second name with a space in between.
// + adds the first names to the string that follows: " is " - spaces included
// + adds the first sections to 
// input.occupation (this works because we are still within the first .map!) 
// + adds the first sections to the final string: "."
// and returns the expected output!

const peopleCaps = (array) => {
  return array.map(input =>
      input.name
      .split(" ")
      .map(value =>
          value.charAt(0)
          .toUpperCase()
          +value.slice(1))
      .join(" ") + " is " + input.occupation + "."
      )
}

// PASS  ./code-challenges.test.js
// peopleCaps
//   ✓ Takes in an array and returns the values capitalized, and returned in a sentence (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.831 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 3.33s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("timesThree", () => {
    it("iterates through array to return the remainders of the numbers only after division by 3 ", () => {
      expect(timesThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
      expect(timesThree(hodgepodge2)).toEqual([ 2, 1, -1 ]);
    });
  });

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
// PC: Input is an array containing numbers, strings and a boolean. Output will be an array containing only the numbers' remainder after being divided by 3. I know we will need to remove strings and booleans from the array, or isolate the numbers in a new array. Then use the modulo character to find and return the remainders after dividing by 3.
// .filter iterates over the array and returns only the values with the typeof number
// .map iterates over the smaller array and divides the numbers by 3 utilizing the modulo, returning the remainder as requested.

const timesThree = (array) => {
  return array.filter(value => 
      typeof value === "number"
      ) 
   .map(value =>
      value % 3
      ) 
}

// PASS  ./code-challenges.test.js
// peopleCaps
//   ✓ Takes in an array and returns the values capitalized, and returned in a sentence (3 ms)
// timesThree
//   ✓ iterates through array to return the remainders of the numbers only after division by 3  (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.73 s
// Ran all test suites.
// ✨  Done in 2.46s.
// learnacademy@learns-air week-6-assessment-VKathryn % 


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("numCubed", () => {
  it("takes in an array and returns the sum of the numbers cubed ", () => {
    expect(numCubed(cubeAndSum1)).toEqual(99);
    expect(numCubed(cubeAndSum2)).toEqual(1125);
  });
});

// ReferenceError: numCubed is not defined GOOD FAIL

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// PC: Input is an array of numbers, output is the sum of all of the numbers cubed. Create a function that iterates over the array, cubes each of the numbers (n * n * n), adds the cubed numbers and returns the sum.
// function numCubed takes in an array and uses .map to iterate through the array and cube each of the numbers using **3 
// .reduce tells the function to iterate through the changed array and add each element to the one next to it, returning the sum of the cubed numbers. 

const numCubed = (array) => {
  return array.map(value =>
      value **3
      )
      .reduce((a,b) => a + b, 0)
}

// PASS  ./code-challenges.test.js
// peopleCaps
//   ✓ Takes in an array and returns the values capitalized, and returned in a sentence (4 ms)
// timesThree
//   ✓ iterates through array to return the remainders of the numbers only after division by 3  (1 ms)
// numCubed
//   ✓ takes in an array and returns the sum of the numbers cubed  (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.941 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 3.37s.
// learnacademy@learns-air week-6-assessment-VKathryn % 