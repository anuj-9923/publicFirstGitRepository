// Local Storage:
localStorage.setItem('name', 'Anuj');
localStorage.setItem('lastName', 'Kumar');
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('lastName'));
localStorage.removeItem('lastName');

//Similar for Session Storage: 
sessionStorage.setItem('name', 'Shubham');
sessionStorage.setItem('lastName', 'Kumar');
console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('lastName');

//Cookies:
// Add Data:
document.cookie = 'name=Anuj';
// Set Expiry Date:
document.cookie = 'name=Anuj ;expires=' + new Date(2022, 2, 3).toUTCString();
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
console.log(document.cookie);