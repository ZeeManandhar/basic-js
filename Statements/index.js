// Statement (Condition Check)

//ES5
// 1. If else, 2. switch case

//1. If Else Statement

//ES
//Ternary Operator

//Write a program to check if the user Male or Female and alert on the basis of their gender

// const gender = confirm("Are u Male?");
// console.log(gender);
// if (gender)
// {
//     alert("You are male");
// }
// else{
//     alert("you are female");
// }

// // Switch case (Multiple Conditions)

// const day = prompt("Which day is today?");

// switch (day) {
//   case "sun":
//     alert("Today is Sunday");
//     break;

//   case "mon":
//     alert("Today is Monday");
//     break;
//   case "tues":
//     alert("Today is Tuesday");
//     break;
//   default:
//     alert("Invalid day");
// }

// const marks = Number(prompt("Enter your grade:"));
// switch (true) {
//   case marks > 80 && marks < 100:
//     alert("Your grade is distinction");
//     break;
//   case marks > 70 && marks < 80:
//     alert("Your grade is A");
//     break;

//   case marks < 70:
//     alert("You are Failed");
//     break;
// }

//ES6
//Ternary Operator

// write a ternary operator to alert gender male or female

// const myGender = prompt("What is your Gender?");

// myGender ? alert("you are male") : ("You are Female");

//switch case using ternary operator

//g = m
//g = f
//g = o
//g => random value

// myGender === "m"
//   ? alert("You are male")
//   : myGender === "f"
//   ? alert("you are Female.")
//   : myGender === "o"
//   ? alert("you are other")
//   : alert("jpt data");

const marks = Number(prompt("Enter your grade"));

marks >= 80 && marks <= 100
  ? alert("Your grade is distinction")
  : marks >= 70 && marks < 80
  ? alert("Your grade is A")
  : marks < 70
  ? alert("you are failed")
  : alert("Default input");
