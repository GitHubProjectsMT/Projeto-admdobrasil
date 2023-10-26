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
const footerText = document.getElementById("footer-text");
const caixaDialogo = document.getElementById("dialog-container")
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
  caixaDialogo.style.display= "block"

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
var dialogBox = document.getElementById("dialog-box");
var dialog = document.getElementById("dialog");
var options = document.getElementById("options");

function responder(opcao) {
  switch (opcao) {
    case 1:
      dialog.innerHTML =
        "Suporte: Certo, vamos prosseguir";
      options.innerHTML = "";
      break;
    case 2:
      dialog.innerHTML =
        "Suporte: Muito bem, é super importante a conferência do processo e caso haja algo validar com o suporte";
      options.innerHTML = "";
      break;
    case 3:
      dialog.innerHTML =
        "Suporte: Pessima escolha, você não deve seguir o processo sem o conferimento ou se for em caso de duvidas não mandar para o suporte.";
      options.innerHTML = "";
      break;
    default:
      dialog.innerHTML = "Personagem: Desculpe, não entendi.";
      options.innerHTML = "";
  }
}
