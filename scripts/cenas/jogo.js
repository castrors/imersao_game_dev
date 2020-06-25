class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();

        personagem = new Personagem(4, imagemPersonagem, 0, 30, 110, 135, 220, 270, 16);
        const inimigo = new Inimigo(4, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 28, 10, 100);
        const inimigoGrande = new Inimigo(5, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 28, 10, 100);
        const inimigoVoador = new Inimigo(3, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 16, 10, 100);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pula();
            somDoPulo.play();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.inimigoAtual++;
            if (this.inimigoAtual > inimigos.length - 1) {
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(10, 30));
        }

        if (personagem.estaColidindo(inimigo)) {
            image(imagemGameOver, width / 2 - 200, height / 3);
            textAlign(CENTER);
            fill('#fff');
            textSize(50);
            text('Pressione ENTER para jogar novamente.', width / 2, height * 2 / 3);

            noLoop();
        }
    }
}