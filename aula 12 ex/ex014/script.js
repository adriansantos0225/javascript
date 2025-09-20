function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'foto-manhaM.jpg'
        document.body.style.background = '#5F90B5'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'foto-tardeM.jpg'
        document.body.style.background = '#FD962E'
    } else {
        img.src = 'foto-noiteM.jpg'
        document.body.style.background = '#1C3645'
    }
}
