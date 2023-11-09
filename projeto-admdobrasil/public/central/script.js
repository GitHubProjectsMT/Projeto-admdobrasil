const startButton = document.getElementById("start-button");
const quitButton = document.getElementById("quit-button");
const gameContainer = document.getElementById("game-container");
const gameMessage = document.getElementById("game-message");
const nextButton = document.getElementById("next-button");
const overlay = document.getElementById("overlay");
const newPhase = document.getElementById("new-phase");
const gameLogo = document.getElementById("game-logo");
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn-modal");
const span = document.getElementsByClassName("close")[0];
const tittleGame = document.getElementById("game-title");

const caixaDialogo = document.getElementById("dialog-container");
const body = document.body;

function iniciarJogo() {
  startButton.style.display = "none";
  modal.style.display = "none";
  btn.style.display = "none";
  quitButton.style.display = "block";
  gameContainer.style.display = "block";
}

function encerrarJogo() {
  startButton.style.display = "block";
  quitButton.style.display = "none";
  gameContainer.style.display = "none";

  location.reload();
}

function proximaFase() {
  overlay.style.display = "block";
  newPhase.style.display = "block";
  modal.style.display = "none";
  startButton.style.display = "none";
}

function iniciarNovaFase() {
  overlay.style.display = "none";
  newPhase.style.display = "none";
  tittleGame.style.display = "none";
  btn.style.display = "none";
  gameLogo.style.display = "none";
  caixaDialogo.style.display = "block"

  // Alterar a imagem de fundo para a nova fase
  body.style.backgroundImage = "url('../imagens/caminheiro_com_nota_2.png')";
}

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
const dialogContainer = document.querySelector(".dialog-container");
const characterNameElement = document.querySelector(".character-name");
const messageElement = document.querySelector(".message");

const dialogues = [
  {
    character: "Faturista:",
    message:
      "Olá, tudo bem? hoje vou te ensinar um pouco do nosso processo interno da ADM, abordando os tópicos da Fase 1.",
  },
  { character: "Você:", message: "Que legal, estou pronto." },
  { character: "Faturista:", message: "Certo." },
  {
    character: "Faturista:",
    message:
      "Primeiro passo importante para o processo de conferimento é o análise dos documentos anexados",
  },
  { character: "Faturista:", message: "Verificamos vários documentos importantes e obrigatorios se estão anexados." },
  { character: "Faturista:", message: "Temos a Ordem de Carregamento." },
  { character: "Faturista:", message: "A nota fiscal de venda do produtor." },
  { character: "Faturista:", message: "O ticket de pesagem do caminhão." },
  { character: "Faturista:", message: "E o Laudo de classificação." },
  { character: "Você:", message: "" },
  { character: "Faturista", message: "" },
  { character: "Faturista", message: "" },
  { character: "Faturista", message: "" },
  { character: "Faturista", message: "" },

  // Adicione mais diálogos aqui
];

let currentDialogueIndex = 0;

function displayNextDialogue() {
  if (currentDialogueIndex < dialogues.length) {
    const currentDialogue = dialogues[currentDialogueIndex];
    characterNameElement.textContent = currentDialogue.character;
    messageElement.textContent = currentDialogue.message;
    currentDialogueIndex++;
  } else {
    dialogContainer.classList.add("hidden");
  }
}

dialogContainer.addEventListener("click", displayNextDialogue);

// Função para mostrar a caixa de diálogo
function showDialogue() {
  currentDialogueIndex = 0;
  dialogContainer.classList.remove("hidden");
  displayNextDialogue();
}

// Mostrar a caixa de diálogo após um atraso (simulando um evento de jogo)
setTimeout(showDialogue, 1000);
