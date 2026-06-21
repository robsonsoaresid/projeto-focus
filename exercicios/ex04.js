// 1) Iniciando a contagem regressiva automaticamente
// Desenvolva uma função que inicie automaticamente a contagem regressiva do temporizador. Use setInterval() para diminuir o tempo a cada segundo e exiba o tempo no console do navegador.

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        // audioTempoFinalizado.play()
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos)
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        // audioPausa.play()
        zerar()
        return
    }
    audioPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
}

// 2) Pausando a contagem regressiva a partir do clique
// Nesta etapa do desenvolvimento do projeto Fokus, refatore o código desenvolvido até o momento, inserindo a funcionalidade de pausar a contagem, a partir do clique no botão.

//const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos)
//}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId) 
    intervaloId = null
}

// 3) Controlando o temporizador com som
// Para tornar a experiência mais interativa, você decide integrar efeitos sonoros específicos que serão reproduzidos em ações como iniciar e pausar o temporizador, além de um som especial quando o tempo se esgota. Sua tarefa é implementar essa funcionalidade usando JavaScript, garantindo que os sons corretos sejam tocados nos momentos apropriados.

const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')

//const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play()   // áudio executado quando cronômetro finalizar
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos)
//}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        audioPausa.play()   // áudio executado quando cronômetro for pausado
        zerar()
        return
    }
    audioPlay.play()   // áudio executado quando cronômetro iniciar
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId) 
    intervaloId = null
}