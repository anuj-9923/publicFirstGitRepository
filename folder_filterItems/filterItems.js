var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit Event
form.addEventListener('submit', addItem);
// Remove Event:
itemList.addEventListener('click', removeItem);
//filter Event:
filter.addEventListener('keyup', filterItems);
//Remove last Event:
var btn = document.createTextNode('button');
var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeLastItem);

//add item:
function addItem(e) {
    e.preventDefault();

    // Get Input Value:
    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('item1').value;
    newItem = newItem + ' ' + newItem1;
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

//filter items:
function filterItems(e) {
    //convert to lowerCase because we don't want to search for upper and lower case:
    var text = e.target.value.toLowerCase();
    //Get List:
    var items = itemList.getElementsByTagName('li');
    // Convert to array because list give in the form of html Collections
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

}
