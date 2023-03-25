// задание №1
class Cars{
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.year = options.year
        this.wheels = options.wheels
    }
    start(){
        console.log('Машина завелась')
    }
}

class Tesla extends Cars{
    constructor(options) {
        super(options);
        this.electro = options.electro;
    }
}
const modelS = new Tesla({
    model: 'tesla',
    color: 'white',
    year:'2022',
    wheels:4,
    electro: true,
})
console.log(modelS)
modelS.start()

class Toyota extends Cars{
    constructor(options) {
        super(options);
        this.volume = options.volume;
    }
}
const rav4 = new Toyota({
    model: 'toyota camry',
    color: 'grey',
    year:'2020',
    wheels:4,
    volume:2487,
})
console.log(rav4)
rav4.start()

class Kia extends Cars{
    constructor(options) {
        super(options);
        this.country = options.country;
    }
}
const sorento = new Kia({
    model: 'Kia sorento',
    color: 'red',
    year:'2023',
    wheels:4,
    country:'Korea',
})
console.log(sorento)
sorento.start()

// задание №2
class Lighter {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
    hide() {
        this.$element.style.display = 'none'
    }
    show() {
        this.$element.style.display = 'block'
    }
}
class Color extends Lighter {
    constructor(options) {
        super(options.selector);
        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.color
        this.$element.style.borderRadius = options.borderRadius + '%'
    }
}

const red = new Color({
    selector: '#red',
    size: 100,
    color: 'red',
    borderRadius: 50
})

const yellow = new Color({
    selector: '#yellow',
    size: 100,
    color: 'yellow',
    borderRadius: 50
})

const green = new Color({
    selector: '#green',
    size: 100,
    color: 'green',
    borderRadius: 50,
})
const light = () => {
    if (input === 'красный') {
        red.show()
        yellow.hide()
        green.hide()
        alert('STOP')
    } else if (input === 'желтый') {
        red.hide()
        yellow.show()
        green.hide()
        alert('WAIT')
    } else if (input === 'зеленый') {
        red.hide()
        yellow.hide()
        green.show()
        alert('GO')
    } else {
        alert('ERROR')
    }
}
light(input = prompt("Введите цвет светофора:").toLowerCase())