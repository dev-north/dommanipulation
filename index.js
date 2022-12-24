let header = document.getElementById('main-header');
header.style.border = "solid 3px #000000";  

let titles = document.getElementsByClassName("title");
console.log(titles);

addItems = titles[0];
addItems.style.fontWeight = "bolder";
addItems.style.color = "green"; 

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

secondListItem = document.querySelector(".list-group-item:nth-child(2)");
secondListItem.style.backgroundColor = "green";

thirdListItem = document.querySelector(".list-group-item:nth-child(3)");
thirdListItem.style.display = "none";