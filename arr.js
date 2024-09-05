console.log("Welcome to the arrays lacture");

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

let arr = [76,65,98,68,73];

let sum = 0;

for(let i=0; i<5; i++){
    sum += arr[i];
}

console.log("The avg is: ",sum/5);