const startButton = document.getElementById("start-button");
      const quitButton = document.getElementById("quit-button");
      const gameContainer = document.getElementById("game-container");
      const gameMessage = document.getElementById("game-message");
      const nextButton = document.getElementById("next-button");
      const overlay = document.getElementById("overlay");
      const newPhase = document.getElementById("new-phase");
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
      }