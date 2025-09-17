
var opcoes = ["pedra", "papel", "tesoura"];

function pedra() {
    jogar("pedra");
}
function papel() {
    jogar("papel");
}
function tesoura() {
    jogar("tesoura");
}

function jogar(jogador) {
    var computador = opcoes[Math.floor(Math.random() * opcoes.length)];
    var resultado = "";

    if (jogador === "pedra" && computador === "tesoura") {
        resultado = (`pedra ganha de tesoura! `)
        resultado += (`Jogador WIN!`)

    } else if (jogador === "pedra" && computador === "papel") {
        resultado = (`papel ganha de pedra! `)
        resultado += (`computador  WIN!`)

    } else if (jogador === "pedra" && computador === "pedra") {
        resultado = (`pedra NÃO ganha de  pedra! `)
        resultado += (`EMPATE!`)

    } else if (jogador === "tesoura" && computador === "pedra") {
        resultado = (`pedra ganha de tesoura! `)
        resultado += (`computador WIN!`)

    } else if (jogador === "tesoura" && computador === "papel") {
        resultado = (`tesoura ganha de papel! `)
        resultado += (`jogador WIN!`)

    } else if (jogador === "tesoura" && computador === "tesoura") {
        resultado = (`tesoura NÃO ganha de tesoura! `)
        resultado += (`EMPATE!`)

    } else if (jogador === "papel" && computador === "tesoura") {
        resultado = (`tesoura ganha de papel! `)
        resultado += (`computador  WIN!`)

    } else if (jogador === "papel" && computador === "pedra") {
        resultado = (`Papel ganha de pedra! `)
        resultado += (`jogador WIN!`)

    } else if (jogador === "papel" && computador === "papel") {
        resultado = (`papel NÃO ganha de papel! `)
        resultado += (`EMPATE!`)
    }

        var elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `Você: ${jogador.toUpperCase()} | Computador: ${computador.toUpperCase()}<br>${resultado}`;
    elementoResultado.style.color = "black";
}