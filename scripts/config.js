const MAX_FICHAS_POR_RENGLON = 6
const RENGLON_1 = 1
const RENGLON_2 = 2
const RENGLON_3 = 3
const INTENTOS = 18

var intentosRestantes = INTENTOS
const DAR_VUELTA = "flip-vertical-fwd"
var idsPrimeraMitad = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var urlsPrimeraMitad = ["chrome.svg", //1
    "facebook.svg", //2
    "firefox.svg", //3
    "google-icon.svg", //4
    "html-5.svg", //5
    "instagram-icon.svg", //6
    "internetexplorer.svg", //7
    "javascript.svg", //8
    "opera.svg" //9
]
var idsSegundaMitad = [10, 11, 12, 13, 14, 15, 16, 17, 18]
var urlsSegundaMitad = ["chrome.svg", //1
        "facebook.svg", //2
        "firefox.svg", //3
        "google-icon.svg", //4
        "html-5.svg", //5
        "instagram-icon.svg", //6
        "internetexplorer.svg", //7
        "javascript.svg", //8
        "opera.svg" //9
    ]
    //1-11-1img/chrome.svg">
    //
var cuerpoficha = ["<div class='elementoJuego'><img id='", "' class='hide' onclick=Jugar('", "') src='img/", "'></div>"]
const HAY_INTENTOS = true
const NO_HAY_INTENTOS = false

const TOTAL_FICHAS = urlsPrimeraMitad.length;

//Estados entre dos fichas//
const IGUALES = true
const DISTINTAS = false
const ES_LA_MISMA = false
    //a-----------------------//