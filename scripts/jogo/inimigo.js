class Inimigo extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite, totalFrames){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite, totalFrames);
    this.velocidade = 10;
  }
  
  move(){ 
    this.x = this.x - this.velocidade;
    
    if(this.x < -this.largura){
      this.x = width;
    }
  }
}