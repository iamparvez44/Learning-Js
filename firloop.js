// 1. Write a for loop that prints numbers from 1 to 10.

// for(let i=0; i<=10;i++){
//     console.log(i);
// }

// 2. Write a for loop that prints the even numbers from 1 to 20.

// for(let i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//3. Write a for loop that prints the sum of all numbers from 1 to 100.

// let sum = 0;

// for(let i=0; i<=100; i++){
//     sum += i;
// }

// console.log(sum);

// 5. Write a for loop that calculates the factorial of a number.

// let fact = 1;

// for(let i=1; i<=5; i++){
//     fact *= i;
// }

// console.log(fact);

//6. Write a for loop that prints the Fibonacci sequence up to a given number n.

// let num1 = 0;
// console.log(num1);
// let num2 = 1;
// console.log(num2);

// for(let i=3; i<=9; i++){
//     let Next_num  = num1 + num2; 
//     console.log(Next_num);

//     num1 = num2;
//     num2 = Next_num;
// }

//8. Write a for loop that prints all the characters of a string.

// let str = "Parvez";

// for(let i = 0; i< str.length; i++){
//     console.log(str[i]);
// }

//Write a for loop that counts the number of vowels in a given string.

// let sentence = "This is a sample sentence.";


//     console.log(sentence.trim());

//Write a for loop that checks if a number is prime.

// let num = 25;
// isPrime = true;
// for(let i=2; i<=24; i++){
//     if(num%i==0){
//         isPrime = false;
//         break
//     }
// }

// if(isPrime==true){
//     console.log("The Number is Prime Number");
// }
// else{
//     console.log("The Number is Composite Number");
// }

//Write a for loop that prints a triangle pattern using asterisks (*).

// let n = 5; // Number of rows

// for (let i = 1; i <= n; i++) {
//     let pattern = ''; // Initialize an empty string for each row
//     for (let j = 1; j <= i; j++) {
//         pattern += '*'; // Add asterisks to the string
//     }
//     console.log(pattern); // Print the pattern for the current row
// }

// practice que to store the info of insta hand

const instagram = {
    fullName: "Shradda Khapra",
    isFollow: true,
    follwers: 345+"k",
    following: 873,
    userName: "shradda001",
    bio: "Hey this is shradda the full stack engeener and also worked in microsoft as a senior developer engeener"



};

instagram["following"] = 1200;

console.log(instagram.following);
console.log(instagram["fullName"]);
// console.log(instagram);
console.log(typeof ["isFollow"]);
