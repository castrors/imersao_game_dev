class TelaInicial {
    constructor() { }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        fill('#fff');
        textSize(50);
        text('As aventuras de', width / 2, height / 3);
        textSize(150);
        text('Bruna', width / 2, height / 2);
        textSize(30);
        text('O COVID-19 finalmente foi combatido.\n A vida que voce tinha antes do Corona esta voltando ao normal.\n Bruna nem pensou duas vezes, pegou seu passaporte se saiu correndo\nAjude ela a chegar no Aeroporto para que ela pegue o primeiro voo para qualquer lugar\n e consiga retomar a sua aventura, que eh conhecer o mundo!', width / 2, height * 2 / 3);
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 6;
        botaoGerenciador.draw();
    }
}