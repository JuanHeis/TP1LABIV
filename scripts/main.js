var clicks = 0;
var primerFicha;
var segundaFicha;
var fichasEncontradas = []
var limitClick = false;
var hayintentos = true

function Jugar(FichaId) {
    if (!limitClick) {
        clicks++
        if (hayintentos) {
            if (clicks == 1) {
                primerFicha = document.getElementById(FichaId)
                if (!BuscarFicha(primerFicha)) {
                    primerFicha.classList.remove('hide')
                    primerFicha.classList.add(DAR_VUELTA, 'show')
                    console.log(primerFicha)
                }
            } else if (clicks == 2) {
                limitClick = true;
                segundaFicha = document.getElementById(FichaId)
                if (!BuscarFicha(segundaFicha)) {
                    segundaFicha.classList.remove('hide')
                    segundaFicha.classList.add(DAR_VUELTA, 'show')
                    console.log(segundaFicha)
                    if (!CompararFichas())
                        setTimeout(reIniciarAnimaciones, 500)
                    else reIniciarValores()
                    HayIntentos()
                    ParesRestantes()
                }
            }
        } else reIniciarValores()
    } else console.log("Dejai de hacer click po")
}

function BuscarFicha(unaFicha) {
    let salida = false
    fichasEncontradas.forEach(x => {
        console.log('la wea')
        console.log(x.id == unaFicha.id)
        if (x.id == unaFicha.id)
            salida = true
    })
    return salida
}

function HayIntentos() {
    intentosRestantes--
    intentosRestantes > 0 ? hayintentos = HAY_INTENTOS : hayintentos = NO_HAY_INTENTOS
    document.getElementById('puntos').innerHTML = intentosRestantes
}

function ParesRestantes() {
    document.getElementById('paresrestantes').innerHTML = (TOTAL_FICHAS - (fichasEncontradas.length / 2))
}

function CompararFichas() {
    if (primerFicha != null && segundaFicha != null)
        if (primerFicha.id != segundaFicha.id)
            if (primerFicha.src == segundaFicha.src) {
                parFichasValida()
                console.log('eureka!')
                return IGUALES
            } else return DISTINTAS
    else return ES_LA_MISMA
    else return DISTINTAS
}

function parFichasValida() {
    primerFicha.classList.remove('hide')
    primerFicha.classList.add(DAR_VUELTA, 'show')
    segundaFicha.classList.remove('hide')
    segundaFicha.classList.add(DAR_VUELTA, 'show')
    fichasEncontradas.push(primerFicha)
    fichasEncontradas.push(segundaFicha)
}

function reIniciarValores() {
    primerFicha = null
    segundaFicha = null
    clicks = 0
    limitClick = false;

}

function reIniciarAnimaciones() {
    primerFicha.classList.remove(DAR_VUELTA, 'show')
    primerFicha.classList.add('hide')
    segundaFicha.classList.remove(DAR_VUELTA, 'show')
    segundaFicha.classList.add('hide')
    setTimeout(reIniciarValores, 100)
}


function Mezclar() {
    reIniciarJuego()
    HayIntentos()
    ParesRestantes()
    let contadorRenglon3 = 0,
        contadorRenglon2 = 0,
        contadorRenglon1 = 0
    let idsMitadUNO = idsPrimeraMitad
    let urlsMitadUNO = urlsPrimeraMitad
    let idsMitadDOS = idsSegundaMitad
    let urlsMitadDOS = urlsSegundaMitad
    while (idsMitadUNO.length != 0 && idsMitadDOS.length != 0) {
        if (idsMitadUNO.length != 0) {
            let posFicha = parseInt(Math.random() * idsMitadUNO.length)
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
            let fichaID = idsMitadUNO[posFicha]
            let fichaURL = urlsMitadUNO[posFicha]
            let renglon = document.getElementById("renglon" + idRenglon)
            let elemento = cuerpoficha[0] + fichaID + cuerpoficha[1] + fichaID + cuerpoficha[2] + fichaURL + cuerpoficha[3]
            renglon.innerHTML += elemento
            idsMitadUNO = eliminarElemento(idsMitadUNO, fichaID)
            urlsMitadUNO = eliminarElemento(urlsMitadUNO, fichaURL)
        }
        if (idsMitadDOS.length != 0) {
            let posFicha = parseInt(Math.random() * idsMitadDOS.length)
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
            let fichaID = idsMitadDOS[posFicha]
            let fichaURL = urlsMitadDOS[posFicha]
            let renglon = document.getElementById("renglon" + idRenglon)
            let elemento = cuerpoficha[0] + fichaID + cuerpoficha[1] + fichaID + cuerpoficha[2] + fichaURL + cuerpoficha[3]
            renglon.innerHTML += elemento
            idsMitadDOS = eliminarElemento(idsMitadDOS, fichaID)
            urlsMitadDOS = eliminarElemento(urlsMitadDOS, fichaURL)
        } else console.log("no llegue")
    }

}

function reIniciarJuego() {
    let renglon1 = document.getElementById("renglon" + RENGLON_1)
    let renglon2 = document.getElementById("renglon" + RENGLON_2)
    let renglon3 = document.getElementById("renglon" + RENGLON_3)

    intentosRestantes = INTENTOS;
    renglon1.innerHTML = ""
    renglon2.innerHTML = ""
    renglon3.innerHTML = ""

    fichasEncontradas = []
}

function eliminarElemento(array, elemento) {
    array = array.filter(e => {
        return e !== elemento
    })
    return array
}