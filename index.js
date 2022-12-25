let form  = document.querySelector("#addForm");
let itemList = document.querySelector("#items");
let filter = document.querySelector("#filter");


//submit event for form
form.addEventListener("submit",addItem);
itemList.addEventListener("click",deleteItem);
filter.addEventListener("keyup",filterItems);

//addItem function
function addItem(e){
    e.preventDefault();

    let newItemData = document.getElementById("item");
    let newItemDescrip = document.getElementById("item-description");
    
    
    let li = document.createElement("l1");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(`${newItemData.value} | ${newItemDescrip.value}`));
    let btn = document.createElement("button");
    btn.className = "btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode("X"));
    li.appendChild(btn);
    itemList.appendChild(li);
}

//deleteItem Fucntion
function deleteItem(e){
    if(e.target.classList.contains("delete")){
        if (confirm("Are you sure ?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName("li");
    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    });
}