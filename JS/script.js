const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const radioBtn = document.getElementById('teacher-radio');
const studentBtn = document.getElementById('student')
const select = document.getElementById('grade');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// add admin eventListner for teacher radio button

radioBtn.addEventListener('change' , function() {
    select.style.display = this.checked ? 'block' : 'none' ;
});
studentBtn.addEventListener('change' , function() {
    select.style.display = this.checked ? 'none' : 'block' ;
});

