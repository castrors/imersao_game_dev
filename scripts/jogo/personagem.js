class Personagem extends Animacao {
  constructor(colunas, imagem, x, largura, altura, larguraSprite, alturaSprite, totalFrames) {
    super(colunas, imagem, x, largura, altura, larguraSprite, alturaSprite, totalFrames);

    this.yInicial = height - this.altura;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.contadorDePulo = 0;
  }

  pula() {
    if(this.contadorDePulo<2){
      this.velocidadeDoPulo = -30;
      this.contadorDePulo++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.contadorDePulo = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisao = 0.7;
    const colisao = collideRectRect(this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;

  }
}