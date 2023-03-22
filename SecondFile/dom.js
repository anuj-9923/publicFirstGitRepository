//Documents of examine
console.dir(document)
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 'Item Lister2';
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[5]);
console.log(document.title);
document.title = 123;
console.log(document.title);

//Get ElementById
console.log(document.getElementById('hear-title'));
console.log(document.getElementById('main-hear'));
var hearTitle = document.getElementById('hear-title');
var hear = document.getElementById('hear-title');
console.log(hearTitle);
hearTitle.textContent = 'Hello';
hearTitle.innerText = 'GoodBye';
console.log(hearTitle);
hearTitle.innerHTML = '<h1>Hello</h1>';
console.log(hearTitle);
hear.style.borrBottom = 'solid 3px #000';

var title = document.getElementsByClassName('title');
console.log(title);
title[0].style.fontWeight = 'bold';
title[0].style.color = 'green';

