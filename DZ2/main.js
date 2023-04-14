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

// const rel = document.querySelector('.rel');
// const abs = document.querySelector('.abs');
//
// const absMove = (rel.offsetWidth - abs.offsetWidth) / 2;
//
// let positionX = 225;
// let positionY = 0;
// let phase = 1;
//
// const move = () => {
//     if (phase === 1&& positionX ===200 ) {
//         positionX++;
//         positionY++;
//         abs.style.left = positionX + 'px';
//         abs.style.top = positionY + 'px';
//         // if(positionX===)
//     }
//     //  else if(phase ===2){
//     //     positionX++;
//     //     positionY++;
//     //     abs.style.left = positionX + 'px';
//     //     abs.style.top = positionY + 'px';
//     // }
//
//
//     setTimeout(move, 10);
// };
//
// move();
//
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
//
// let lineX = 225
// let lineY =0
// phase = 1
//
// const move = ()=>{
//     if (lineX >= 0 && lineY <= 225) {
//         lineX--
//         lineY++
//         abs.style.left = `${lineY}px`;
//         abs.style.top = `${lineX}px`;
//         abs.style.backgroundColor = 'white'
//         setTimeout(move,1)
//     } else if (lineX <= 225 && lineY <= 450) {
//         lineX++
//         lineY++
//         abs.style.left = `${lineY}px`;
//         abs.style.top = `${lineX}px`;
//         abs.style.backgroundColor = `blue`;
//         setTimeout(move,1)
//         // if (lineX ===225 && lineY===450){
//         //     phase = 3
//         // }
//     } else if (lineX <= 450 && lineY >= 225) {
//         lineX++
//         lineY--
//         abs.style.left = `${lineY}px`;
//         abs.style.top = `${lineX}px`;
//         abs.style.backgroundColor = 'green';
//         setTimeout(move,1)
//         // if (lineX ===450 && lineY===225){}
//         // phase===4
//     }
//     // else if (lineX >= 225 && lineY >= 0) {
//     //     lineX--
//     //     lineY--
//     //     abs.style.left = `${lineY}px`;
//     //     abs.style.top = `${lineX}px`;
//     //     abs.style.backgroundColor = 'red'
//     //     setTimeout(move,1)
//     //
//     // }
// move()
// }
// move()

// let positionX = 0;
// let positionY = 450;
// const move = () => {
//     if (positionX >= 0&& positionY>=0) {
//         positionX+=7
//         positionY-=15
//         abs.style.top = `${positionX}px`
//         abs.style.left = `${positionY}px`
//         setTimeout(move, 100)
//     }
//         else if (positionX <=450&& positionY<=450) {
//         positionY++
//         positionX--
//         abs.style.left = `${positionY}px`
//         abs.style.top = `${positionX}px`
//         setTimeout(move, 1)
//     }
//     else if(positionX>=0&& positionY>=0){
//         positionY--
//         positionX--
//         abs.style.top = `${positionY}px`
//         abs.style.left = `${positionX}px`
//         setTimeout(move, 1)
//     }
// }
// move()

// let newX = 0;
// let newY = 225;
// let coordinats = [
//     { x: 0, y: 225 },
//     { x: 225, y: 0 },
//     { x: 450, y: 225 },
//     { x: 225, y: 450 },
// ];
// let currentPoint = 0;
//
// const move = ()=>{
//     abs.style.left = `${newY}px`;
//     abs.style.top = `${newX}px`;
//
//     if (newX < coordinats[currentPoint].x) {
//         newX++;
//     } else if (newX > coordinats[currentPoint].x) {
//         newX--;
//     }
//
//     if (newY < coordinats[currentPoint].y) {
//         newY++;
//     } else if (newY > coordinats[currentPoint].y) {
//         newY--;
//     }
//
//     if (newX === coordinats[currentPoint].x && newY === coordinats[currentPoint].y) {
//         currentPoint++;
//         if (currentPoint >= coordinats.length) {
//             currentPoint = 0;
//         }
//     }
//     setTimeout(move,1)
// }
// move()