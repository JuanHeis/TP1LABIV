var clicks = 0;
var primerElemento;
var segundoElemento;
var elementosEncontrados = []

function flip(elemento) {
    clicks++
    if (clicks == 1) {
        primerElemento = document.getElementById(elemento)
        if (!buscarElemento(primerElemento)) {
            primerElemento.classList.remove('hide')
            primerElemento.classList.add('flip-vertical-fwd', 'show')
            console.log(primerElemento)
        }
    } else if (clicks == 2) {
        segundoElemento = document.getElementById(elemento)
        if (!buscarElemento(segundoElemento)) {
            segundoElemento.classList.remove('hide')
            segundoElemento.classList.add('flip-vertical-fwd', 'show')
            console.log(segundoElemento)
            if (!comparar())
                setTimeout(reIniciarAnimaciones, 500)
            else reIniciarValores()
        }
    } else {}
}

function buscarElemento(unElemento) {
    let salida = false
    elementosEncontrados.forEach(x => {
        console.log('la wea')
        console.log(x.id == unElemento.id)
        if (x.id == unElemento.id)
            salida = true
    })
    return salida
}


function comparar() {
    if (primerElemento != null && segundoElemento != null)
        if (primerElemento.id != segundoElemento.id)
            if (primerElemento.src == segundoElemento.src) {
                parValido()
                console.log('eureka!')
                return true
            } else return false
    else return false
    else return false
}

function parValido() {
    primerElemento.classList.remove('hide')
    primerElemento.classList.add('flip-vertical-fwd', 'show')
    segundoElemento.classList.remove('hide')
    segundoElemento.classList.add('flip-vertical-fwd', 'show')
    elementosEncontrados.push(primerElemento)
    elementosEncontrados.push(segundoElemento)
}

function reIniciarValores() {
    primerElemento = null
    segundoElemento = null
    clicks = 0
}

function reIniciarAnimaciones() {
    primerElemento.classList.remove('flip-vertical-fwd', 'show')
    primerElemento.classList.add('hide')
    segundoElemento.classList.remove('flip-vertical-fwd', 'show')
    segundoElemento.classList.add('hide')
    setTimeout(reIniciarValores, 500)
}