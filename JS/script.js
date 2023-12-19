const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// add admin eventListner for teacher radio button

var radioBtn = document.getElementById('teacher-radio');
var select = document.getElementById('grade');

radioBtn.addEventListener('change' , function() {
    select.style.display = this.checked ? 'block' : 'none' ;
});

