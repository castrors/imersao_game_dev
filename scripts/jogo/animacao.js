class Animacao {
  constructor(colunas, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, totalFrames) {
    this.colunas = colunas;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY;
    this.altura = altura;
    this.y = height - this.altura - this.variacaoY;
    this.largura = largura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual = 0;
    this.totalFrames = totalFrames;
  }

  exibe() {
    image(this.imagem, this.x, this.y,
      this.largura, this.altura,
      (this.frameAtual % this.colunas) * this.larguraSprite,
      Math.floor(this.frameAtual / this.colunas) * this.alturaSprite,
      this.larguraSprite, this.alturaSprite);
    this.anima();
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >= this.totalFrames) {
      this.frameAtual = 0;
    }
  }
}