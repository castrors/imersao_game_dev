class Personagem extends Animacao {
  constructor(colunas, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, totalFrames) {
    super(colunas, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, totalFrames);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.pulos = 0;
    this.alturaDoPulo = -50;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisaoCimaEsquerda = 0.2;
    const precisaoBaixoDireita = 0.7;

    const colisao = collideRectRect(
      this.x + Math.round(this.largura * precisaoCimaEsquerda),
      this.y + Math.round(this.altura * precisaoCimaEsquerda),
      this.largura * precisaoBaixoDireita,
      this.altura * precisaoBaixoDireita,
      inimigo.x + Math.round(inimigo.largura * precisaoCimaEsquerda),
      inimigo.y + Math.round(inimigo.altura * precisaoCimaEsquerda),
      inimigo.largura * precisaoBaixoDireita,
      inimigo.altura * precisaoBaixoDireita
    );

    return colisao;

  }
}