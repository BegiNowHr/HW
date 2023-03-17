//Первое задание
var incr = document.getElementById('incr')
var decr =document.getElementById('decr')
var zero = document.getElementById('zero')
var schetchik = 0
incr.addEventListener("click", function () {
    schetchik++;
    if (schetchik<0){
        schetchik=0
    }
    zero.textContent = schetchik;
})
decr.addEventListener("click", function () {
    schetchik--;
    if (schetchik<0){
        schetchik=0
    }
    zero.textContent = schetchik;
})
//Второе задание
var posX = document.getElementById('posX')
var posY = document.getElementById('posY')
var block = document.getElementById('block')
block.addEventListener("mousemove", (event )=>{
    posX.innerHTML= event.screenX
    posY.innerHTML= event.screenY
})
// Третье задание
var red = document.getElementById('red')
var yellow = document.getElementById('yellow')
var green = document.getElementById('green')
var lights = function (input){
    if (input==='красный'){
    red.style.backgroundColor = 'red'
    alert('STOP')
}
else if (input==='желтый'){
    yellow.style.backgroundColor = 'yellow'
    alert('WAIT')
}
else if (input==='зеленый'){
    green.style.backgroundColor = 'green'
    alert('GO')
}
else{
    alert('ERROR')
}}
lights(input = prompt("Введите цвет светофора:").toLowerCase())