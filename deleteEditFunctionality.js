var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//form submit Event
form.addEventListener('submit', addItem);
// Remove Any Item:
itemList.addEventListener('click', removeItem);
//Remove last Item:
var btn = document.createTextNode('button');
var removeButton = document.getElementById("remove");

removeButton.addEventListener("click", removeLastItem);
//add item:
function addItem(e) {
    e.preventDefault();

    // Get Input Value:
    var newItem = document.getElementById('item').value;

    //Create new li Element:
    var li = document.createElement('li');
    //Add Class
    li.className = 'list-group-item';

    // Add text node with input value:
    li.appendChild(document.createTextNode(newItem));

    //Create button
    var deleteBtn = document.createElement('button');

    //Add class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node for button
    deleteBtn.appendChild(document.createTextNode('X'));

    //appned Child
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}
//Remove Item:
function removeItem(e) {
    var last = itemList[itemList.length - 1];
    itemList.parentNode.removeChild(last);
}
removeButton.style.width = '100px';
removeButton.style.backgroundColor = 'red';
function removeLastItem() {
    var list = document.getElementById("items");
    var listItems = list.getElementsByTagName("li");

    var last = listItems[listItems.length - 1];
    list.removeChild(last);
}
