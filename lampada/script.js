let turnOnOff = document.querySelector('button#turnOnOff')
let lamp = document.querySelector ('img#lamp')

function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()){
    lamp.src = './img/ligada.jpg'
    turnOnOff.textContent = 'Desligar'
    }
}

function lampOff() {
    if (!isLampBroken()) {
    lamp.src = './img/desligada.jpg'
    turnOnOff.textContent = 'Ligar'
    }
}

function lampBroken() {
    if (!isLampBroken()) {
        lamp.src = './img/quebrada.jpg'
        turnOnOff.textContent = 'Consertar'
    }
    
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar' && !isLampBroken()) {
        lampOn()
        turnOnOff.textContent = 'Desligar'
    } else {
        lampOff()
        turnOnOff.textContent = 'Ligar'
    }
}

function lampBrokenReset() {
    if (isLampBroken()) {
        lamp.src = '.img/desligada.jpg'
        lampOff()
    }
}

turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
turnOnOff.addEventListener('dblclick', lampBrokenReset)