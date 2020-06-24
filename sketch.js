let imagemCenario;
let imagemGameOver;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let cenario;
let somDoJogo;
let somDoPulo;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

let inimigos = []

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();

  personagem = new Personagem(4, imagemPersonagem, 0, 30, 110, 135, 220, 270, 16);
  const inimigo = new Inimigo(4, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 28, 10, 200);
  const inimigoGrande = new Inimigo(5, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 28, 10, 2500);
  const inimigoVoador = new Inimigo(3, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 16, 10, 1500);

  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);

  frameRate(40);
  somDoJogo.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula();
    somDoPulo.play();
  }
  if (key === 'Enter') {
    inimigos = [];
    setup();
    loop();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 3);
      textAlign(CENTER);
      fill('#fff');
      textSize(50);
      text('Pressione ENTER para recomeçar', width / 2, height * 2 / 3);

      noLoop();
    }
  });
}