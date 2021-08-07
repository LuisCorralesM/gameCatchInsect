// Code here!!

// SELECCIONAMOS: --------------------------------------
const 
// .screen => los 3 divs principales
screens = document.querySelectorAll('.screen'),

// .choose-insect-bnt => los botones que permiten escoger entre los 4 insectos
choose_insect_btns = document.querySelectorAll('.choose-insect-btn'),
// #start-btn => boton de inicio de juego "play game"
start_btn = document.getElementById('start-btn'),
// #game-container =>  ultimo div 
game_container = document.getElementById('game-container'),

// #time => titulo "h3" para mostrar el tiempo
tiemEl = document.getElementById('time'),
// #score => titulo "h3" para mostrar el puntaje
scoreEl = document.getElementById('score'),
// #message => enlace "a" para mostrar un mensaje
message = document.getElementById('message');

// DEFINIMOS: --------------------------------------
var 
//para contar el tiempo
seconds = 0,
//contar el puntaje
score = 0,
// para guardar el "src" y "alt" del insecto seleccionado
selected_insect = {}

// ESCUCHAMOS EVENTOS: --------------------------------------

// start_btn => evento "click" y "add" la clase "up" para ocultar primer div y dirigirnos al segundo div

start_btn.addEventListener('click', ()=> screens[0].classList.add('up'))

// forEach => recorre todas las instancias del "nodeList" de "choose_insect_btns" 
choose_insect_btns.forEach(btn => {
// btn => Corresponde al target (en este caso "button") que captó el evento "click"
    btn.addEventListener('click', ()=>{
        const 
//      guardamos el elemento "img" que corresponde a la imagen dentro del boton y los atributos "src", "alt" de dicha imagen
        img = btn.querySelector('img'),
        src = img.getAttribute('src'),
        alt = img.getAttribute('alt')

//      agrupamos  los atributos "src" y "alt" en el obj "selected_insect"
        selected_insect = {src, alt}
//      le pasamos la clase "up" al segundo div, para ocultarlo y dirigirnos al tercer div 
        screens[1].classList.add('up')

//      inicializamos un temporizador para que despues de 1 segundo se ejecute la funcion "createInsect"
        setTimeout(createInsect, 1000)
//      invocamos la funcion "startGame" la cual da inicio al juego
        startGame()
    })
})

//  startGame => cada 1 segundo ejecuta la funcion "increaseTime"
function startGame(){
    setInterval(increaseTime, 1000)
}

// icreaseTime => incrementar el tiempo
function increaseTime(){
    let 
// guardamos munitos en "m" y segundos en "s"
    m = Math.floor(seconds / 60),
    s = seconds % 60
    
//  Establecemos un conddicional para saber si debemos anteponer un 0 o nó
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    
//  Pasamos por pantalla los cambion insertandolos como contenido de "h3" con el #time
    tiemEl.innerHTML = `Time: ${m}:${s}`

    seconds++
}

// Despues de haber pasaso 1 seg se ejecuta esta funcion
// createInsect => 
function createInsect() {
//  se crea un "div" y se le da la clase "insect"
    const insect = document.createElement('div')
    insect.classList.add('insect')
//  obtenemos las coordenadas aleatorias "x", "y" para el "style position top-left"
    const {x,y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
//  como contenido del "div" le pasamos la "img" con sus atributos "src" y "alt" guardados anteriormente en las línea 48
    insect.innerHTML = 
    `
        <img src="${selected_insect.src}" alt"${selected_insect.alt}" style="transform: rotate(${Math.random()*360}deg)" />
    `   
    
//  Capturamos el evento "click" de ese "div" que acabamos de crear y le asociamos la funcion "catchInsect"
    insect.addEventListener('click', catchInsect)
//  Finalmente imprimimos el "div" en el DOM pasandolo como hijo del div "game_container"
    game_container.appendChild(insect)
}


// Esta es la funcion que crea las posiciones "top - left" aleatorias para el "div" creado en la funcion "createInsect"
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width -200) + 100
    const y = Math.random() * (height -200) + 100

    return{x,y}
}

// cuando se da "click" en el "div" creado con la funcion "createInsect", se ejecuta esta funcion
function catchInsect(){
//  increaseScore => incrementamos el puntaje en +1
    increaseScore()
//  se le agrega la clase "caught" al "div" con la clase "insect"
    this.classList.add('caught')
//  Despues de 2 seg removemos este "div"
    setTimeout(() => this.remove(), 2000);
//  invocamos "addInsects"
    addInsects()
}

function addInsects() {
//  Se crean mas insectos de manera asincrona  cada 2.5 y 3 seg por cada click en un "div" de tipo "insect"
    setTimeout(createInsect, 3000);
    setTimeout(createInsect, 2500);
}

//  increaseScore => incrementamos el puntaje en +1
function increaseScore(){
    score++
//  Si el puntaje "score" es mayor a 19, le damos la clase "visible" a "message" 
    if(score >19){
        message.classList.add('visible');
    }
//  Refrescamos el contenido de "scoreEl" 
    scoreEl.innerHTML = `Score: ${score}`;
}


// message.addEventListener('click', ()=> screens[1].classList.remove('up'))



