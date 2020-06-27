class Cenario {
  constructor(imagem0, imagem1, imagem2, imagem3, velocidade) {
    this.imagem3 = imagem3;
    this.imagem2 = imagem2;
    this.imagem1 = imagem1;
    this.imagem0 = imagem0;
    this.velocidade = velocidade;
    this.x31 = 0;
    this.x32 = width;
    this.x21 = 0;
    this.x22 = width;
    this.x11 = 0;
    this.x12 = width;
    this.x01 = 0;
    this.x02 = width;
  }

  exibe() {
    image(this.imagem3, this.x31, 0, width, height);
    image(this.imagem3, this.x32, 0, width, height);
    image(this.imagem2, this.x21, 0, width, height);
    image(this.imagem2, this.x22, 0, width, height);
    image(this.imagem1, this.x11, 0, width, height);
    image(this.imagem1, this.x12, 0, width, height);
    image(this.imagem0, this.x01, 0, width, height);
    image(this.imagem0, this.x02, 0, width, height);
  }

  move() {
    this.x31 = this.x31 - this.velocidade * 1;
    this.x32 = this.x32 - this.velocidade * 1;

    if (this.x31 < -width) {
      this.x31 = width;
    }

    if (this.x32 < -width) {
      this.x32 = width;
    }

    this.x21 = this.x21 - this.velocidade * 2;
    this.x22 = this.x22 - this.velocidade * 2;

    if (this.x21 < -width) {
      this.x21 = width;
    }

    if (this.x22 < -width) {
      this.x22 = width;
    }

    this.x11 = this.x11 - this.velocidade * 4;
    this.x12 = this.x12 - this.velocidade * 4;

    if (this.x11 < -width) {
      this.x11 = width;
    }

    if (this.x12 < -width) {
      this.x12 = width;
    }

    this.x01 = this.x01 - this.velocidade * 8;
    this.x02 = this.x02 - this.velocidade * 8;

    if (this.x01 < -width) {
      this.x01 = width;
    }

    if (this.x02 < -width) {
      this.x02 = width;
    }
  }
}