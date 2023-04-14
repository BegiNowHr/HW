//Задание №2
let timer = 0;
let time = document.querySelector('#time');
let alertTime = document.querySelector('#alert');

setInterval(() => {
    if (timer < 300) {
        timer++;
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        time.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (minutes===1) {
            alertTime.innerHTML = "Прошла 1 минута";}
        else if (minutes === 2) {
            alertTime.innerHTML = "Прошло 2 минуты";
        }
        else if (minutes===3){
            alertTime.innerHTML = "Прошло 3 минуты";
        }
        else if (minutes===4){
            alertTime.innerHTML = "Прошло 4 минуты";
        }
    }
    else {
        clearInterval();
        alertTime.innerHTML = "Прошло 5 минут! Время вышло";
    }
}, 1000);


//задание№1
const abs = document.querySelector('.abs');
const rel = document.querySelector(".rel");

const absSize = 50;
const relWidth = 300;
const relHeight = 350;

abs.style.width = `${absSize}px`;
abs.style.height = `${absSize}px`;
rel.style.width = `${relWidth}px`;
rel.style.height = `${relHeight}px`;

let posX = 0,
    posY = 0;
let moveVertical = "bottom",
    moveHorizontal = "right";

function changePosition(x, y) {
    if (x === "left") {
        posX--;
    } else {
        posX++;
    }
    if (y === "top") {
        posY--;
    } else {
        posY++;
    }
}
function moveBlock() {
    if (posX === relWidth - absSize) {
        moveHorizontal = "left";
        console.log('влево')
    } else if (posX === 0) {
        moveHorizontal = "right";
        console.log('вправо')
    }
    if (posY === relHeight - absSize) {
        moveVertical = "top";
        console.log('вверх')
    } else if (posY === 0) {
        moveVertical = "bottom";
        console.log('вниз')
    }

    changePosition(moveHorizontal, moveVertical);

    abs.style.left = `${posX}px`;
    abs.style.top = `${posY}px`;
}
setInterval(moveBlock, 0);
