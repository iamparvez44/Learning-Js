// let btn = document.querySelector("#btn");
// console.log(btn);

// btn.style.backgroundColor = ("green");

// let items = document.querySelector(".form_control:last-child");
// console.log(items);

//     items.style.color = "red";

// document.body.childNodes[3].innerText = "Parvez";

// let firstTag = document.querySelector(".form_control");
// console.dir(firstTag);
// console.log(firstTag);
// console.log(firstTag.tagName);

// let heading = document.querySelector("h2");
// console.log(heading);
// console.dir(heading);

// heading.innerText = heading.innerText + ("Apna College Student")

// let divs = document.querySelectorAll(".box");
// console.log(divs);
// divs[0].innerText = "Mango";
// divs[0].style.backgroundColor = "orange";
// divs[1].innerText = "Apple";
// divs[1].style.backgroundColor = "yellow ";
// divs[2].innerText = "Banana";

// let box = document.querySelector("div");
// console.log(box);
// let myId = div.getAttribute("box1");
// console.log(myId);

// let btn1 = document.querySelector("#btn1");
// console.log(btn1);

// btn1.addEventListener("click", ()=>{
//     console.log("Button was clicked")
// })
// btn1.addEventListener("click", ()=>{
//     console.log("Button was clicked 2")
// })

// let div = document.querySelector("div");
// console.log(div);

// div.onmouseover = (event) => {
//   console.log("You are in the Box");
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
//   console.log(event.clientX, event.clientY);
// };

// let btn = document.querySelector("#mode");
// let currMode = "light";

// btn.addEventListener("click", (e)=>{
//     if(currMode=="light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "pink";
//     }
//     console.log(currMode);
// })

let box = document.querySelector("#box");
let stage = "normal"
console.log(box);

box.addEventListener("mouseover", (e)=>{
    if(stage=="normal"){
        stage="abnormal";
        document.querySelector("#box").style.backgroundColor = "black";
    }else{
        stage = "normal";
        document.querySelector("#box").style.backgroundColor = "pink";
    }
    console.log(stage);
})