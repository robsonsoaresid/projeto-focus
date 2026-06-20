// 1) Criando funções no JavaScript
// Na construção do projeto Fokus, crie uma função chamada alterarContexto() que altera o caminho da imagem e a cor de fundo, de acordo com o contexto de cada um dos três temporizadores: “Foco”, “Descanso curto” e “Descanso longo”.

function alterarContexto(contexto, imagem) {
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${imagem}`);
}

// 2) Alterando imagens e estilos dinamicamente
// Crie eventos de clique para cada um dos três contextos do projeto, alterando a classe com os estilos de cor de fundo, e o caminho das imagens de cada contexto:

const focoBt = document.querySelector(".app__card-button--foco");
focoBt.addEventListener("click", () => {
  alterarContexto("foco", "foco.png");
});

const curtoBt = document.querySelector(".app__card-button--curto");
curtoBt.addEventListener("click", () => {
  alterarContexto("descanso-curto", "descanso-curto.png");
});

const longoBt = document.querySelector(".app__card-button--longo");
longoBt.addEventListener("click", () => {
  alterarContexto("descanso-longo", "descanso-longo.png");
});

// 3) Alterando textos dinamicamente
focoBt.addEventListener("click", () => {
  alterarContexto("foco");
});

curtoBt.addEventListener("click", () => {
  alterarContexto("descanso-curto");
});

longoBt.addEventListener("click", () => {
  alterarContexto("descanso-longo");
});

function alterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
      break;
    case "descanso-curto":
      titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `;
      break;
    case "descanso-longo":
      titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `;
    default:
      break;
  }
}
