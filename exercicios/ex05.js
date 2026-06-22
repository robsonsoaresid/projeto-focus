// 1) Alterando textos e ícones dinamicamente

// A tarefa consiste em utilizar JavaScript para implementar uma lógica que altere o texto e o ícone inserido no botão que inicia e pausa o temporizador do projeto Fokus. Inicialmente ele tem escrito “Começar” com ícone de play, implemente uma lógica que altere o texto para “Pausar” com ícone de pause, sempre que o temporizador for iniciado.

//Restante do código oculto
startPauseBt.addEventListener('click', iniciarOuPausar)

const iniciarOuPausarBt = document.querySelector('#start-pause span')
const iniciarOuPausarBtIcone = document.querySelector(".app__card-primary-butto-icon") 
function iniciarOuPausar() {
    if(intervaloId){
        audioPausa.play()   
        zerar()
        return
    }
    audioPlay.play()   
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"  // Altera o texto para "Pausar"
    iniciarOuPausarBtIcone.setAttribute('src', `/imagens/pause.png`)  // Altera para o ícone de pause
}

function zerar() {
    clearInterval(intervaloId) 
    iniciarOuPausarBt.textContent = "Começar"  // Retorna a palavra "Começar" quando o temporizador for pausado
    iniciarOuPausarBtIcone.setAttribute('src', `/imagens/play_arrow.png`)  // Altera para o ícone de play
    intervaloId = null
}

// 2) Mostrando temporizador na tela

// Até esta etapa do projeto Fokus, é possível mostrar o tempo no console do navegador. Sua próxima missão é mostrar o temporizador na tela, na div com o ID #timer. Logo, utilize o método innerHTML para inserir elementos na tela e o objeto do JavaScript new Date.

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play()   
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()   // Chamando a função mostrarTempo na contagem regressiva
}

startPauseBt.addEventListener('click', iniciarOuPausar)

//const iniciarOuPausarBt = document.querySelector('#start-pause span')
//const iniciarOuPausarBtIcone = document.querySelector(".app__card-primary-butto-icon") 
function iniciarOuPausar() {
    if(intervaloId){
        audioPausa.play()   
        zerar()
        return
    }
    audioPlay.play()   
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"  
    iniciarOuPausarBtIcone.setAttribute('src', `/imagens/pause.png`) 
}

//function zerar() {
    clearInterval(intervaloId) 
    //iniciarOuPausarBt.textContent = "Começar"      iniciarOuPausarBtIcone.setAttribute('src', `/imagens/play_arrow.png`)     intervaloId = null
//}

const tempoNaTela = document.querySelector('#timer')

function mostrarTempo() {   // criando função para mostrar tempo na tela
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    tempoNaTela.innerHTML = `${tempo}`
}

mostrarTempo()

// 3) Formatando minuto/segundo com JavaScript

// Já é possível mostrar o temporizador na tela, entretanto, o formato de minutos e segundos precisa ser configurado. Sua missão nessa etapa é configurar o formato para “00:00”, onde os minutos aparecem no lado esquerdo e os segundos no lado direito.

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})  //Formatando tempo na tela
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()

// 4) Alterando o cronômetro do temporizador

// Você está na última etapa de desenvolvimento do projeto Fokus. O próximo passo é implementar o contexto de temporizador para cada cronômetro para cada formato:

// Ao clicar no botão “Focus” o temporizador deve ser em 1500 segundos;
// Ao clicar no botão “Descanso curto” o temporizador deve ser em 300 segundos;
// Ao clicar no botão “Descanso longo” o temporizador deve ser em 900 segundos.

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})
