
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();

  telaInicial = new TelaInicial();
  telaFinal = new TelaFinal();
  jogo = new Jogo();
  jogo.setup();
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial,
    telaFinal: telaFinal
  }

  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
  if (key === 'Enter') {
    inimigos = [];
    somDoJogo.stop();
    setup();
    botaoGerenciador.botao.remove();
    loop();
  }
}

function draw() {
  cenas[cenaAtual].draw();
}