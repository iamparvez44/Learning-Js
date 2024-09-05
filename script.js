// console.log("Arthmatic Operators");

// let a = 5;
// let b = 3;
// console.log("a = 5 & b = 3");
// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);

//conditional statment

// let age = 18;

// if(age<=10){
//     console.log("You Can Vote");
// }
// else{
//     console.log("You can not Vote");
// }

// let Num = prompt("Enter a Number : ");

// if(Num%5===0){
//     console.log("The Number is multiple of 5");
// }
// else{
//     console.log("The Number is Not multiple of 5");
// }

// write a code to give gread to std according to thair score 

// let score = prompt("Enter the Marks : ");
// if(score>=90 && score<=100){
//     console.log("A");
// }
// else if(score>=70 && score<=89){
//     console.log("B");
// }
// else if(score>=60 && score<=69){
//     console.log("C");
// }
// else if(score>=50 && score<=59){
//     console.log("D");
// }
// else{
//     console.log("F");
// }

// Loops and Strings

// for of loop

// let str = "Parvez";

// for(let i of str){
//     console.log(i);
// }

// For in Loops

// let student = {

//     fullName: "Parvez Alam",
//     age: 26,
//     cgpa: 7.5,
//     isPass: true

// };

// for(let key in student){
//     console.log(key, student[key]);
// }

// Create a game where take a user input and match with that input to the game number

// let gameNum = 18;

// let userNum = prompt("Guess The Number");

// while(userNum != gameNum){
//     let userNum = prompt("Sorry Guess Again");
// }
// console.log("Congratulation!! You Entered The right number");

//Make a user name to create his account

let fullName = prompt("Enter The fullName");

let userName = "@"+fullName+fullName.length;

console.log(userName);