import Inimigo from "./Inimigo";
import Personagem from "./Personagem";

export default class Chefe extends Inimigo {

  causarDano() {
    if (this.arma === null) {
      return this.forca;
    } else {
      return this.forca + this.arma.getDano() * 2;
    }
  }

  atacar(personagem: Personagem) {
    const chanceAcerto = Math.random();
    if (chanceAcerto < 0.5) {
      console.log('Ataque falhou');
    } else {
      personagem.receberDano(this.causarDano());
    }
  }

  // Modificar o método de receber dano para adicionar a chance de ação especial
  receberDano(dano: number) {
    this.vida -= dano;
    console.log(`Vida do Chefe: ${this.vida}`);

    if (this.vida <= 0) {
      // Verificar se o chefe fará a ação especial (20% de chance)
      const chanceAcaoEspecial = Math.random();
      if (chanceAcaoEspecial < 0.2) {
        this.acaoEspecial();
      } else {
        console.log('Chefe derrotado!');
      }
    }
  }

  
  private acaoEspecial() {
    console.log('Ação especial do chefe! Ele faz algo antes de ser derrotado...');
    const acao = Math.random();

    if (acao < 0.33) {
      console.log('O Chefe lança um ataque devastador!');
    } else if (acao < 0.66) {
      console.log('O Chefe se cura um pouco antes de cair!');
      this.vida = 20;  
    } else {
      console.log('O Chefe invoca aliados para ajudá-lo!');
     
    }
  }
}
