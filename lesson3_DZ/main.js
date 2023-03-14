//Первое задание:
var num = function (a,b){
    if (a < b) {
        alert(a)
    }
    else if (a > b) {
        alert(b)
    }
    else if (a===b){
        alert('equal')
    }
    else {
        alert('ERORR')
    }
}
num(a = Number(prompt('Выберете 1 число!')),
b = Number(prompt('Выберете 2 число!')))

// Второе задание
function l(word) {
    console.log(word.length)
}
l(word= prompt('введите слово'))

//Третье задание
function calculator(calcFirst,op,calcSecond) {
    if (op === '/' && calcSecond === 0){
        alert('На ноль делить нельзя!!!')
    }
    else if (op === '+'){
        alert(calcFirst + calcSecond)
    }
    else if (op === '-'){
        alert(calcFirst - calcSecond)
    }
    else if(op === '/') {
        alert(calcFirst / calcSecond)
    }
    else if(op === '*'){
        alert(calcFirst * calcSecond)
    }
    else{
        alert('erorr')
    }
}
calculator(calcFirst = Number(prompt('Выберете 1 число')),op = prompt('+,-,*,/'),calcSecond = Number((prompt('Выберите 2 число'))))


