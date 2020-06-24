let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let cenario;
let somDoJogo;
let somDoPulo;
let personagem;
let inimigo;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(4, imagemPersonagem, 0, 110, 135, 220, 270, 16);
  inimigo = new Inimigo(4, imagemInimigo, width - 52, 52, 52, 104, 104, 28);
  frameRate(40);
  somDoJogo.loop();
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();
  
  if(personagem.estaColidindo(inimigo)){
     console.log('colidiu');
     noLoop();
  }
}