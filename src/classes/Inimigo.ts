import Personagem from './Personagem';

export default class inimigo extends Personagem {
  
  atacar(personagem: Personagem) {
    const chanceAcerto = Math.random();
    if (chanceAcerto < 0.5) {
      console.log('Ataque falhou');
    } else {
      personagem.receberDano(this.causarDano());
    }
  }

  override receberDano(dano: number) {
    this.vida = this.vida - dano;
    if (this.vida < 0) {
      console.log('Inimigo morreu');
    }
  }
}
