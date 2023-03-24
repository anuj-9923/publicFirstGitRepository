var form = document.getElementById('addForm');
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
    var userDetails = '{' + 'name' + ':' + name + ',' + 'email' + ':' + email + ',' + 'phonenumber' + ':' + phoneNumber + '}';
    localStorage.setItem(email, details);
}
