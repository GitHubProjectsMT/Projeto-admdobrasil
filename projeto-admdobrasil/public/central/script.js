const startButton = document.getElementById("start-button");
const quitButton = document.getElementById("quit-button");
const gameContainer = document.getElementById("game-container");
const gameMessage = document.getElementById("game-message");
const nextButton = document.getElementById("next-button");
const overlay = document.getElementById("overlay");
const newPhase = document.getElementById("new-phase");
const gameLogo = document.getElementById("game-logo");
const body = document.body;

function iniciarJogo() {
  startButton.style.display = "none";
  quitButton.style.display = "block";
  gameContainer.style.display = "block";
  gameMessage.innerHTML = "O jogo começou! Divirta-se!";
}

function encerrarJogo() {
  startButton.style.display = "block";
  quitButton.style.display = "none";
  gameContainer.style.display = "none";
  gameMessage.innerHTML = "Jogo encerrado. Até a próxima!";
}

function proximaFase() {
  overlay.style.display = "block";
  newPhase.style.display = "block";
}

function iniciarNovaFase() {
  overlay.style.display = "none";
  newPhase.style.display = "none";
  gameMessage.innerHTML = "Nova fase começou! Boa sorte!";

  // Alterar a imagem de fundo para a nova fase
  body.style.backgroundImage = "url('../imagens/caminheiro_com_nota_2.png')";
  gameLogo.style.display = "none";
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
