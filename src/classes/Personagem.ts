import Arma from './Armas';

export default class Personagem {
  private nome: string = '';
  private vida: number = 100;
  private forca: number = 10;
  private arma: Arma | null = null;

  getNome() {
    return this.nome;
  }
  getVida() {
    return this.vida;
  }
  getForca() {
    return this.forca;
  }
  getArma() {
    return this.arma;
  }

  constructor(nome: string, vida: number = 100, forca: number = 10) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
  }

  setNome(nome: string) {
    this.nome = nome;
  }
  setVida(vida: number) {
    this.vida = vida;
  }
  setForca(forca: number) {
    this.forca = forca;
  }
  setArma(arma: Arma) {
    this.arma = arma;
  }

  receberDano(dano: number) {
    this.vida = this.vida - dano;
    if (this.vida < 0) {
      console.log('Personagem F');
    }
  }

  equiparArma(arma: Arma) {
    this.arma = arma;
    console.log(this.arma?.getNome() + 'Equipada');
  }
  calcularDano(arma: Arma) {
    if (this.arma === null) {
      return this.forca;
    } else {
      return this.forca + this.arma?.getDano();
    }
  }

  private causarDano() {
    if (this.arma === null) {
      return this.forca;
    } else {
      return this.forca + this.arma?.getDano();
    }
  }
}
