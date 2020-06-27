class Pontuacao{
    constructor(){
        this.pontos = fita.configuracoes.fimDoJogo;
    }

    exibe(){
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        text('ETA Aeroporto: '+parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto(){
        this.pontos-= 0.2;

        if(Math.round(this.pontos) === 0){
            cenaAtual = 'telaFinal'
        }
    }
}