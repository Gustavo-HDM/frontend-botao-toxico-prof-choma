document.addEventListener("DOMContentLoaded", function () {
    const botaoSim = document.querySelector(".botao:nth-of-type(1)");
    const botaoNao = document.querySelector(".botao:nth-of-type(2)");

    botaoNao.addEventListener("mouseover", function () {
        const larguraJanela = window.innerWidth;
        const alturaJanela = window.innerHeight;

        const novaPosicaoX = Math.random() * (larguraJanela - botaoNao.clientWidth);
        const novaPosicaoY = Math.random() * (alturaJanela - botaoNao.clientHeight);

        botaoNao.style.position = "absolute";
        botaoNao.style.left = `${novaPosicaoX}px`;
        botaoNao.style.top = `${novaPosicaoY}px`;
    });

    botaoSim.addEventListener("click", function () {
        botaoSim.classList.add("shake");

        setTimeout(function () {
            botaoSim.classList.remove("shake");
        }, 300);

        for (let i = 0; i < 20; i++) {
            criarCoracao();
        }
    });

    function criarCoracao() {
        const coracao = document.createElement("div");
        coracao.classList.add("coracao");
        coracao.textContent = "❤️";
        document.body.appendChild(coracao);

        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        coracao.style.left = `${posX}px`;
        coracao.style.top = `${posY}px`;

        setTimeout(() => {
            coracao.remove();
        }, 3000);
    }
});