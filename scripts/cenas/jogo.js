class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup() {
    
        cenario = new Cenario(imagemCenario0, imagemCenario1, imagemCenario2, imagemCenario3, 3);
        pontuacao = new Pontuacao();
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        personagem = new Personagem(4, imagemPersonagem, 10, -30, 240, 240, 240, 240, 14);
        const inimigoAndando = new Inimigo(4, imagemInimigoAndando, width, 0, 213, 201, 71, 67, 16, 10);
        const inimigoCorrendo = new Inimigo(3, imagemInimigoCorrendo, width, 0, 213, 201, 71, 67, 8, 10);

        inimigos.push(inimigoAndando);
        inimigos.push(inimigoCorrendo);
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