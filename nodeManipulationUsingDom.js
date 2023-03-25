var itemList = document.querySelector('#items');
console.log(itemList);

//parentNode:
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parent of parentNode:
console.log(itemList.parentNode.parentNode);

//parentElement:
console.log(itemList.parentElement);

//childNode:
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[3]);
itemList.children[2].style.backgroundColor = 'yellow';

//FirstChild:
console.log(itemList.firstChild);

// FirstElementChild:
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';
//lastChild:
console.log(itemList.lastChild);

//lastElementChild:
console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling:
console.log(itemList.nextSibling);

//nextElementSibling:
console.log(itemList.nextElementSibling);

//previousSibling:
console.log(itemList.previousSibling);

//previousElementSibling:
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement:
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
console.log(newDiv);


var parentNode = document.getElementById('items');
parentNode.innerHTML = '<li class="list-group-item">Item 1</li><li class="list-group-item">Item 2</li><li class="list-group-item">Item 3</li><li class="list-group-item">Item 4</li>';
parentNode.innerHTML = '<li class="list-group-item">HEllo</li>' + parentNode.innerHTML;

console.log(parentNode);






