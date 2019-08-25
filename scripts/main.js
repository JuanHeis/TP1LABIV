var clicks = 0;
var primerElemento;
var segundoElemento;
var elementosEncontrados = []
var limitClick = false;

function flip(elemento) {
    if (!limitClick) {
        clicks++
        if (clicks == 1) {
            primerElemento = document.getElementById(elemento)
            if (!buscarElemento(primerElemento)) {
                primerElemento.classList.remove('hide')
                primerElemento.classList.add('flip-vertical-fwd', 'show')
                console.log(primerElemento)
            }
        } else if (clicks == 2) {
            limitClick = true;
            segundoElemento = document.getElementById(elemento)
            if (!buscarElemento(segundoElemento)) {
                segundoElemento.classList.remove('hide')
                segundoElemento.classList.add('flip-vertical-fwd', 'show')
                console.log(segundoElemento)
                if (!comparar())
                    setTimeout(reIniciarAnimaciones, 500)
                else reIniciarValores()
            }
        } else { reIniciarValores() }
    } else console.log("Dejai de hacer click po")
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
    limitClick = false;
}

function reIniciarAnimaciones() {
    primerElemento.classList.remove('flip-vertical-fwd', 'show')
    primerElemento.classList.add('hide')
    segundoElemento.classList.remove('flip-vertical-fwd', 'show')
    segundoElemento.classList.add('hide')
    setTimeout(reIniciarValores, 100)
}


function comenzar() {
    let contadorRenglon3 = 0,
        contadorRenglon2 = 0,
        contadorRenglon1 = 0
    while (idsFichaspar.length != 0 && idsFichasimpar.length != 0) {
        if (idsFichaspar.length != 0) {
            let posFicha = parseInt(Math.random() * idsFichaspar.length)
            let idRenglon = RENGLON_1
            if (contadorRenglon1 < MAX_FICHAS_POR_RENGLON) {
                contadorRenglon1++
                idRenglon = RENGLON_1
            } else if (contadorRenglon2 < MAX_FICHAS_POR_RENGLON) {
                contadorRenglon2++
                idRenglon = RENGLON_2
            } else if (contadorRenglon3 < MAX_FICHAS_POR_RENGLON) {
                contadorRenglon3++
                idRenglon = RENGLON_3
            }
            let fichaID = idsFichaspar[posFicha]
            let fichaURL = urlsFichaspar[posFicha]
            let renglon = document.getElementById("renglon" + idRenglon)
            let elemento = cuerpo[0] + fichaID + cuerpo[1] + fichaID + cuerpo[2] + fichaURL + cuerpo[3]
            renglon.innerHTML += elemento
            idsFichaspar = eliminarElemento(idsFichaspar, fichaID)
            urlsFichaspar = eliminarElemento(urlsFichaspar, fichaURL)

        }
        if (idsFichasimpar.length != 0) {
            console.log(idsFichasimpar.length)
            let posFicha = parseInt(Math.random() * idsFichasimpar.length)
            if (contadorRenglon1 < MAX_FICHAS_POR_RENGLON) {
                contadorRenglon1++
                idRenglon = RENGLON_1
            } else if (contadorRenglon2 < MAX_FICHAS_POR_RENGLON) {
                contadorRenglon2++
                idRenglon = RENGLON_2
            } else if (contadorRenglon3 < MAX_FICHAS_POR_RENGLON) {
                contadorRenglon3++
                idRenglon = RENGLON_3
            }
            console.log("Llegue")
            let fichaID = idsFichasimpar[posFicha]
            let fichaURL = urlsFichasimpar[posFicha]
            let renglon = document.getElementById("renglon" + idRenglon)
            let elemento = cuerpo[0] + fichaID + cuerpo[1] + fichaID + cuerpo[2] + fichaURL + cuerpo[3]
            renglon.innerHTML += elemento
            idsFichasimpar = eliminarElemento(idsFichasimpar, fichaID)
            urlsFichasimpar = eliminarElemento(urlsFichasimpar, fichaURL)
        } else console.log("no llegue")
    }
}

function eliminarElemento(array, elemento) {
    array = array.filter(e => {
        return e !== elemento
    })
    return array
}