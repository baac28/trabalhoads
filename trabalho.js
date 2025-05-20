function botao() {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "Você tem tudo o que precisa para vencer. Continue firme!";


    let container = document.getElementById("mensagem");
    container.innerHTML = "";
    container.appendChild(paragrafo);
}