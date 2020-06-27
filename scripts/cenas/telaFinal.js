class TelaFinal {
    constructor() {
    }

    draw() {
        somDoJogo.stop();
        somDaVitoria.loop();
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
        imageMode(CENTER);
        image(imagemTelaFinal, width * 2 /3, height/2, 500, 700);
        
    }

    _texto() {
        textFont(fonteTelaInicial);
        fill('#fff');
        textSize(200);
        text('FIM ', width/ 2, height / 3);
        textSize(50);
        text('Aventuras de Bruna', width / 2, height / 2);
        textSize(30);
        text('Muito bem! Bruna conseguiu pegar o voo\n a tempo, gracas a sua ajuda!', width / 2, height * 2 / 3);
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 6;
        botaoGerenciador.draw();
    }
}