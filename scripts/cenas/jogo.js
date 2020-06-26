class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        personagem = new Personagem(4, imagemPersonagem, 0, 30, 110, 135, 220, 270, 16);
        const inimigo = new Inimigo(4, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 28, 10,);
        const inimigoGrande = new Inimigo(5, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 28, 10);
        const inimigoVoador = new Inimigo(3, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 16, 10);

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

        vida.draw();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];

        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();


            if (vida.vidas === 0) {
                image(imagemGameOver, width / 2 - 200, height / 3);
                textAlign(CENTER);
                fill('#fff');
                textSize(50);
                text('Pressione ENTER para jogar novamente.', width / 2, height * 2 / 3);
                noLoop();
            }
        }
    }
}