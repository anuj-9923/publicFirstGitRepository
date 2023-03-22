var item2 = document.querySelector('.list-group-item:nth-child(2)');
console.log(item2);
item2.style.backgroundColor = 'green';

var item3 = document.querySelector('.list-group-item:nth-child(3)');
console.log(item3);
item3.style.display = 'none';

var items = document.querySelectorAll('.list-group-item');
console.log(items);
console.log(items[1]);
items[1].style.color = 'green';

for (let i = 0; i < items.length; i++) {
    if ((i + 1) % 2 != 0) {
        items[i].style.backgroundColor = 'green';
    }
}
