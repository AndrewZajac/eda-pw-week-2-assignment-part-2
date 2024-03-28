// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// Then we write a conditional that commands, if the value of name equals 'Mary'
// console log 'Hi, Mary!'
//if it's not true, console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We make a variable called secret
// We make a variable called code and set it to 123 as a number.
// then we write a conditional that states, if the value of code equals 123
// then the variable of super gets set to 'super'
//then the value of code gets set to code multiplied by the number 2
//then we write another conditional that states, if code is greater than the number 250
//then set secret to 'duper'
//console log 'secret'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We create a variable called isStudent and set it to the boolean true
//We create a variable called age and set it to the number 34
//We create a variable called zip and set it to the number 55407
//We then create a conditional which states, if isStudent equals true and zip is greater than 80000
//then console log `You're a student on the West Coast!`
//if the value of isStudent equals false or the value of age is less than 30
//console log 'What are your hobbies?'
//if the value of isStudent equals true
//console log 'Welcome to Prime'
//If none of those are true, console log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX-colorOne needs to be 'blue' and colorTwo needs to be 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX colorTwo also needs to be set to 'purple'
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
//FIX time should not be a constant, it should just use let instead.
let temp = 40;
const time = 4;

//FIX this conditional is using the wrong compound, needs to use and instead of or.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
//FIX It never said for minAge to be a constant, just a variable so it should just use let.
let age = 21;
const minAge = 21;

//FIX the variable age has to swap with the variable minAge, then have it be greater than or equal to.
if(minAge <= age) {
  //FIX There should not be an else command or anything within the command
  //plus it should console log 'enter' instead of no entry
  console.log('no entry');
} else {
  console.log('enter');
}
*/

