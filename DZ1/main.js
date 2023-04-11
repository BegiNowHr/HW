//Задание№1
const emailInput = document.querySelector('#email')
let emailCheck = document.querySelector('#emailCheck')
const passwordInput = document.querySelector('#password')
const passwordCheck = document.querySelector('#passwordCheck')
const checkbox = document.querySelector('#checkbox1 ')
const checkbox2 = document.querySelector('#checkbox2')
const passwordRepeat = document.querySelector('#passwordRepeat')
const passwordRepCheck = document.querySelector('#passwordRepeatCheck')
const save = document.querySelector('#save')
const saveEnd = document.querySelector('#saveEnd')

const emailRegExp = /@/
emailInput.oninput=()=>{

    if (emailRegExp.test(emailInput.value)===true){
        emailCheck.innerText = '✓';
        emailCheck.style.color = 'green';
    }
    else {
        emailCheck.innerText = 'X';
        emailCheck.style.color = 'red';
    }
}
const passRegExp = /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я]){8,20}/
passwordInput.oninput=()=>{
    if (passRegExp.test(passwordInput.value)===true){
        passwordCheck.innerText = '✓';
        passwordCheck.style.color = 'green';
    }
    else {
        passwordCheck.innerText = 'Пароль не соответствует требуемыем параментрам';
        passwordCheck.style.color = 'red';
    }
}
passwordRepeat.oninput=() => {
    if (passwordInput.value === passwordRepeat.value) {
        passwordRepCheck.innerText = 'Пароли совпадают';
        passwordRepCheck.style.color = 'green';
    } else {
        passwordRepCheck.innerText = 'Пароли не совпадают';
        passwordRepCheck.style.color = 'red';
    }
}
function visibility() {
    if (checkbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

    if (checkbox2.checked) {
        passwordRepeat.type = 'text';
    } else {
        passwordRepeat.type = 'password';
    }
}

checkbox.addEventListener('click', visibility);
checkbox2.addEventListener('click', visibility);

save.onclick = ()=>{
    if (emailCheck.style.color === 'green' && passwordCheck.style.color === 'green' && passwordRepCheck.style.color === 'green'
    ){
        saveEnd.innerHTML = 'Все отлично';
        saveEnd.style.color='green';
    }
    else{
        saveEnd.innerHTML = 'Пожалуйста следуйте инструкции по заполнению';
        saveEnd.style.color='red';
    }
}

// Задание №2
const rel = document.querySelector('.rel');
const abs = document.querySelector('.abs');
const absMove = rel.offsetWidth - abs.offsetWidth;

const move = () => {
    let position = abs.offsetLeft + 5;
    if (position > absMove) {
        position = 0;
    }
    abs.style.left = position + 'px';
    if (abs.offsetLeft >= absMove) {
        return;
    }
move();
}
move()