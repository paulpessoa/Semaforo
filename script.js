const img = document.getElementById('imagem');
const botoes = document.getElementById('botoes');
let corIndex = 0;
let intervaloId = null;

const lampada = ( event ) => {
   // console.log(event.target.id )
   pararAutomatico ();
   turnOn[event.target.id](); //o evento é utilizado para ativar a funcao turnOn
}

const proximoIndex = () => {
    
    corIndex = corIndex < 2 ? ++corIndex : 0; //adicionar o '++' antes de corIndex para evitar erro.
    /*
    if ( corIndex < 2) {
        corIndex++;
    } else {
        corIndex = 0;
    } */
}

const mudarCor = () => {
    const cores = ['red', 'yellow', 'green'] //array de cores
    const cor = cores[ corIndex];
    turnOn[cor]();
    proximoIndex();
}

//antes de iniviar outro EventSource, esta função irá parar o anterior em linha 8.
const pararAutomatico = () => {
    clearInterval(intervaloId)
}

// esta variavel armazena tres funcoes que alterao a imagem
const turnOn = {
    'red' : () => img.src = './img/vermelho.png',
    'yellow' : () => img.src = './img/amarelo.png',
    'green' : () => img.src = './img/verde.png',
    'automatico' : () => intervaloId = setInterval(mudarCor, 1500)
}

botoes.addEventListener('click', lampada)