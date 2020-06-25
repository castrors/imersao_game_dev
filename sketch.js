
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();

  telaInicial = new TelaInicial();
  jogo = new Jogo();
  jogo.setup();
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  }

  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
  if (key === 'Enter') {
    inimigos = [];
    setup();
    botaoGerenciador.botao.remove();
    loop();
  }
}

function draw() {
  cenas[cenaAtual].draw();
}