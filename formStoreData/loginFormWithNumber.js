var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
console.log(itemList);
//form submit Event
form.addEventListener('submit', storeData);
//Store Data:
function storeData(e) {
    e.preventDefault();
    // Get Input Value:
    var name = document.getElementById('item').value;
    var email = document.getElementById('item1').value;
    var phoneNumber = document.getElementById('item2').value;
    var userDetail = {
        name: name,
        email: email,
        phoneNumber: phoneNumber
    };
    var details = JSON.stringify(userDetail);
    localStorage.setItem(email, details);
    var li = document.createElement('li');
    //Add Class
    li.className = 'list-group';

    // Add text node with input value:
    var list = '•' + name + '-' + email + '-' + phoneNumber;
    console.log(list);
    li.appendChild(document.createTextNode(list));

    itemList.appendChild(li);
}
