// let myObj = {
//     name: "Anuj",
//     age: 23
// };
// let myObj_serialized = JSON.stringify(myObj);
// //JSON.stringify convert object to string.
// localStorage.setItem("myObj", myObj_serialized);

// let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
// console.log(myObj_deserialized);
// console.log(localStorage.getItem(myObj_deserialized));
var form = document.getElementById('addForm');
//form submit Event
form.addEventListener('submit', storeData);
//Store Data:
function storeData(e) {
    e.preventDefault();
    // Get Input
    var obj = {
        name: document.getElementById('item').value,
        email: document.getElementById('item1').value,
    };
    var myObj_serialized = JSON.stringify(obj);
    localStorage.setItem("myObj", myObj_serialized);
}
