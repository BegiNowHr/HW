var arr = [26,77,50,153,235,5000,4]
var newArr = arr.filter(num => ['1','2','5'].includes(num.toString()[0]))
console.log(newArr)

for (var i=10;i>0;i--) {
    console.log(i);
}
var svetofor = prompt('Выберите один из цветов: Красный, желтый, зеленый').toLowerCase()
var obj = {
    red:'красный',
    yellow:'желтый',
    green:'зеленый'
}
switch (svetofor) {
    case obj.red:
        alert('СТОП');
        break;
    case obj.yellow:
        alert('ПРИГОТОВЬСЯ');
        break;
    case obj.green:
        alert('ИДИ');
        break;
    default:
        alert('Выберите один из предложенных цветов!!!')
}