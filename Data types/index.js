//types 

//string

const name = "Zeeson";

//number

const pi = 3.1415;

//BigInt

const int = BigInt("9894545461616");

//undefined

let ex;
console.log(ex);

//Null
const x = null;
console.log(x);

//Boolean
const isMale = true;
const isFemale = false;
console.log(isMale,isFemale);

//Symbol
const person = Symbol("ZEESON");
console.log(person);

//object
const Zeeson = {name:"zeeson", age:32, dob: "" };
console.log(Zeeson);

//Type Conversion / Type coercion

//String => Number

const num = "8";
console.log(num);
const actualNum = Number(num);
console.log(actualNum);
console.log(actualNum + 2);

//Number => String

const num2 = 8;
const stringNum = String(num2);
console.log(stringNum + "2")