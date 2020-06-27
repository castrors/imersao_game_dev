function preload() {
    imagemCenario0 = loadImage('imagens/cenario/skill-desc_0000_foreground.png');
    imagemCenario1 = loadImage('imagens/cenario/skill-desc_0001_buildings.png');
    imagemCenario2 = loadImage('imagens/cenario/skill-desc_0002_far-buildings.png');
    imagemCenario3 = loadImage('imagens/cenario/skill-desc_0003_bg.png');

    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/bruna_run.png');
    imagemInimigoAndando = loadImage('imagens/inimigos/walking-enemy.png');
    imagemInimigoCorrendo = loadImage('imagens/inimigos/running-enemy.png');
    imagemTelaInicial = loadImage('imagens/assets/airport.png');
    imagemTelaFinal = loadImage('imagens/assets/fim.jpg');
    imagemVida = loadImage('imagens/assets/coracao.png')
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

    fita = loadJSON('fita/fita.json');

    somDoJogo = loadSound('sons/OvO.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somDaVitoria = loadSound('sons/Battle_Crowd_Celebration.mp3');
}