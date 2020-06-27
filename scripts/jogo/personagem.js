class Personagem extends Animacao {
  constructor(colunas, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, totalFrames) {
    super(colunas, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, totalFrames);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.pulos = 0;
    this.alturaDoPulo = -50;
    this.invencivel = false;
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

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }

  estaColidindo(inimigo) {
    if (this.invencivel) return false;
    const precisao = 0.7;
    const colisao = collideCircleCircle(
      this.x + (this.largura/2),
      this.y + (this.altura /2),
      this.largura * precisao,
      inimigo.x + (inimigo.largura/2),
      inimigo.y + (inimigo.altura /2),
      inimigo.largura * precisao
    );

    return colisao;

  }
}