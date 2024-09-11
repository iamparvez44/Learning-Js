console.log("Welcome to the function lacture");

// let marks = [17,72,21,23,5,98];
// console.log(marks);

// PRINTING ARRAY ITEMS BY USING LOOPS

// let arr = ["Parvez Alam", "Arshad Ali", "Ziyaurrehman Ansari", "Qasid Salfi", "Waseem Akram", "Wassey Sariq"];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let friends of arr){
//     console.log(friends);
// }

// FInd the avg of the given array

// let arr = [76,65,98,68,73];

// let sum = 0;

// for(let i=0; i<5; i++){
//     sum += arr[i];
// }

// console.log("The avg is: ",sum/5);

// Practice Quetion

// let items = [250, 645, 300, 900, 50];

// let idx = 0;

// for(let val of items){
//     console.log(`the value of index ${idx} = ${val} `);
//     let offer = val/10;
//     items[idx] -= offer;

//     console.log(`the value after offer is  ${items[idx]}`);

//     idx++;
// }

// push method in arrays

// let foodItems = ["Guava", "Apple", "Grapes", "Litchi"];

// foodItems.push = ["Campa", "Kurkure", "Ciggrate"];

// for(let food of foodItems){
//     console.log(food);
// }

// console.log(foodItems);

// let marks=[89,78,90,76,99,68];
// console.log(marks);
// console.log(marks[3]);

// let heroes = ["parvez", "arshad", "ziya", "qasid", "waseem", "wassey"];

// for(let idx = 0; idx<heroes.length; idx++){
//     console.log(heroes[idx]);
// }

// heroes.push["Amaan","Saqib", "Rabbani"];

// for(let idx of heroes){
//     console.log(idx.toUpperCase());
// }

// let foodItems = ["Appple","Kurkure","Chips","cigg"];

// foodItems.push("Rice","Paratha","Cold Drinks");

// for(let food of foodItems){
//     console.log(food.toUpperCase());
// }

// foodItems.splice(2,1,"Parvez");

// console.log(foodItems);

// Practice Que

// let companies = ["Bloomberg", "Uber","Microsoft", "Google", "IBM", "Netflix"];

// console.log(companies);

// for(let comany of companies){
//     console.log(comany);
// }

// companies.splice(1,1,"ola");

// console.log(companies);

// companies.push("Amazon");
// console.log(companies);

//FUNTION IN JS

// function myFunction(){
//     console.log("Welcome to Apna College");
//     console.log("I am learning Js");
// }

// myFunction();
// myFunction();
// myFunction();

// addintion of two number

// function mySum(x,y){
//     let sum = (Number(x) + Number(y));
//     return sum;
// }

// function myProduct(x,y){
//     let product = (Number(x) * Number(y));
//     return product;

// }

// let a = prompt("Enter First Number");
// let b = prompt("Enter Scnd Numbr");

// let val = mySum(a,b);

// console.log(val);

// let c = prompt("Enter First Number for Product");
// let d = prompt("Enter Scnd Numbr for Prduct");

// let valofProduct = myProduct(c,d);

// console.log(valofProduct);

// ARROW FUNCTION

// const arrowSm = (x,y) => {

//     console.log(Number(x)+Number(y));
// }

// let a = prompt("Enter First Number");
// let b = prompt("Enter Scnd Numbr");

// arrowSm(a,b);

function findvowle(str) {
  let count = 0;

  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

let a = prompt("Enter a String");
findvowle(a);


