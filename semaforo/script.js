let img = document.querySelector('img#img')
let buttons = document.querySelector('div#buttons')
let colorIndex = 0
let intervalId = null

let trafficlight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()
}

nextIndex = () => {
    colorIndex = colorIndex < 2 ? ++colorIndex : 0
}

let changeColor = () => {
    let colors = ['red', 'yellow', 'green']
    let color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

let stopAutomatic = () => {
    clearInterval( intervalId)
}

let turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficlight)