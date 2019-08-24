var clicks = 0;
var primerElemento;
var segundoElemento;
function flip(elemento) {
    clicks++
    
    if (clicks==1) {
        primerElemento = document.getElementById(elemento)
        primerElemento.classList.remove('hide')
        primerElemento.classList.add('flip-vertical-fwd', 'show')
        console.log(primerElemento)
    } else if (clicks==2) {
        segundoElemento = document.getElementById(elemento)
        segundoElemento.classList.remove('hide')
        segundoElemento.classList.add('flip-vertical-fwd', 'show')
        console.log(segundoElemento)
        setTimeout(reIniciar, 500)
    } else {}

    
    comparar()
}
function comparar(){
    if (primerElemento!=null && segundoElemento!=null)
        if (primerElemento.id != segundoElemento.id)
            if (primerElemento.src == segundoElemento.src){
                console.log('eureka!')
            }
}
function parValido(){
    segundoElemento.classList.remove('hide')
    segundoElemento.classList.add('flip-vertical-fwd', 'show')
    primerElemento.classList.remove('hide')
    primerElemento.classList.add('flip-vertical-fwd', 'show')
}
function reIniciar(){
    clicks=0
    primerElemento.classList.remove('flip-vertical-fwd', 'show')
    primerElemento.classList.add('hide')
    segundoElemento.classList.remove('flip-vertical-fwd', 'show')
    segundoElemento.classList.add('hide')
    primerElemento = null
    segundoElemento = null
}