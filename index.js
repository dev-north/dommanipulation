let form  = document.querySelector("#addForm");
let itemList = document.querySelector("#items");


//submit event for form
form.addEventListener("submit",addItem);
itemList.addEventListener("click",deleteItem);

//addItem function
function addItem(e){
    e.preventDefault();

    let newItemData = document.getElementById("item");
    
    
    let li = document.createElement("l1");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItemData.value))
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