var form = document.getElementById('addForm');
//form submit Event
form.addEventListener('submit', storeData);
//Store Data:
function storeData(e) {
    e.preventDefault();
    // Get Input Value:
    var name = document.getElementById('item').value;
    var email = document.getElementById('item1').value;
    localStorage.setItem(email, name);
}
