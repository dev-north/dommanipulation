// let header = document.getElementById('main-header');
// header.style.border = "solid 3px #000000";  

// let titles = document.getElementsByClassName("title");
// console.log(titles);

// addItems = titles[0];
// addItems.style.fontWeight = "bolder";
// addItems.style.color = "green"; 

// let items = document.getElementsByClassName("list-group-item");

// items[2].style.backgroundColor = "green";

// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = "bold";
    
// }


// let items = document.getElementsByTagName("li");

// items[2].style.backgroundColor = "green";

// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = "bold";
    
// }

// secondListItem = document.querySelector(".list-group-item:nth-child(2)");
// secondListItem.style.backgroundColor = "green";

// thirdListItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdListItem.style.display = "none";

// listItems = document.querySelectorAll(".list-group-item");
// console.log(listItems);
// listItems[1].style.color = "green";


// oddListItems = document.querySelectorAll(".list-group-item:nth-child(odd)");
// oddListItems.forEach(oddListItem => {
//     oddListItem.style.backgroundColor = "green";
// });

//parent Element
var ItemList = document.querySelector("#items");
console.log(ItemList.parentElement);


//children
console.log(ItemList.children); //returns a html collection

console.log(ItemList.childNodes); //returns a list node

//accesing specific children
console.log(ItemList.children[1]); //returns second child

//accesing first child that is an element
console.log(ItemList.firstElementChild); //returns first li

console.log(ItemList.firstChild); //returns whitespace (text node)

//accesing last child

console.log(ItemList.lastChild); //returns text node 
console.log(ItemList.lastElementChild); 

//accesing siblings
console.log(ItemList.nextSibling);
console.log(ItemList.nextElementSibling); //in our case it doesnt have any 

console.log(ItemList.previousSibling); //text node
console.log(ItemList.previousElementSibling); //returns h2


let textInput = document.querySelector("input[type = text]");
textInput.setAttribute("placeholder", "Item Name");



let container = document.querySelector("#main-header").firstElementChild;


let helloWorld = document.createElement("p");
let text  = document.createTextNode("Hello World");
helloWorld.appendChild(text);


let h1 = container.firstElementChild
container.insertBefore(helloWorld , h1);

let newElement = document.createElement("li");
newElement.className = "list-group-item";
let itemText = document.createTextNode("Hello World");
newElement.appendChild(itemText);
let firstItem = ItemList.firstElementChild
ItemList.insertBefore(newElement,firstItem);
