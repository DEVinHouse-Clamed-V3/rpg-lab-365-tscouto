// import Arma from './Armas';
// import inimigo from './Inimigo';

// export default class Personagem {
//   private nome: string = '';
//   protected vida: number = 100;
//   protected forca: number = 10;
//   protected arma: Arma | null = null;

//   getNome() {
//     return this.nome;
//   }
//   getVida() {
//     return this.vida;
//   }
//   getForca() {
//     return this.forca;
//   }
//   getArma() {
//     return this.arma;
//   }

//   constructor(nome: string, vida: number = 100, forca: number = 10) {
//     this.nome = nome;
//     this.vida = vida;
//     this.forca = forca;
//   }

//   setNome(nome: string) {
//     this.nome = nome;
//   }
//   setVida(vida: number) {
//     this.vida = vida;
//   }
//   setForca(forca: number) {
//     this.forca = forca;
//   }
//   setArma(arma: Arma) {
//     this.arma = arma;
//   }

//   receberDano(dano: number) {
//     this.vida = this.vida - dano;
//     if (this.vida < 0) {
//       console.log('Personagem F');
//     }
//   }

//   equiparArma(arma: Arma) {
//     this.arma = arma;
//     console.log(this.arma?.getNome() + 'Equipada');
//   }
//   calcularDano(arma: Arma) {
//     if (this.arma === null) {
//       return this.forca;
//     } else {
//       return this.forca + this.arma?.getDano();
//     }
//   }

//   protected causarDano() {
//     if (this.arma === null) {
//       return this.forca;
//     } else {
//       return this.forca + this.arma?.getDano();
//     }
//   }

//   atacar(inimigo: inimigo) {
//     const chanceAcerto = Math.random();
//     if (chanceAcerto < 0.1) {
//       console.log('Ataque falhou');
//     } else {
//       inimigo.receberDano(this.causarDano());
//     }
//   }
// }

import Arma from './Armas';
import { Habilidade } from './Habilidade';
import Inimigo from './Inimigo';

export default class Personagem {
  private nome: string;
  protected vida: number;
  protected forca: number;
  protected defesa: number;
  protected agilidade: number;
  protected arma: Arma | null = null;
  private experiencia: number = 0;
  private nivel: number = 1;
  private habilidades: Habilidade[] = [];
  private status: string[] = [];

  constructor(nome: string, vida: number = 100, forca: number = 10, defesa: number = 5, agilidade: number = 10) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.defesa = defesa;
    this.agilidade = agilidade;
  }

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

  getNivel() {
    return this.nivel;
  }

  ganharExperiencia(exp: number) {
    this.experiencia += exp;
    if (this.experiencia >= 100) {
      this.experiencia = 0;
      this.subirDeNivel();
    }
  }

  subirDeNivel() {
    this.nivel++;
    this.forca += 5;
    this.vida += 10;
    console.log(`${this.nome} subiu para o nível ${this.nivel}`);
  }

  aplicarStatus(status: string) {
    this.status.push(status);
    console.log(`${this.nome} está agora ${status}`);
  }

  removerStatus(status: string) {
    const index = this.status.indexOf(status);
    if (index > -1) {
      this.status.splice(index, 1);
      console.log(`${this.nome} não está mais ${status}`);
    }
  }

  verificarStatus() {
    return this.status;
  }

  equiparArma(arma: Arma) {
    this.arma = arma;
    console.log(`${arma.getNome()} equipada.`);
  }

  calcularDano() {
    if (this.arma === null) {
      return this.forca;
    } else {
      return this.forca + this.arma.getDano();
    }
  }

  atacar(inimigo: Inimigo) {
    const chanceAcerto = Math.random();
    if (chanceAcerto < 0.1) {
      console.log('Ataque falhou');
    } else {
      inimigo.receberDano(this.calcularDano());
    }
  }

  receberDano(dano: number) {
    const danoFinal = Math.max(dano - this.defesa, 0);
    this.vida -= danoFinal;
    if (this.vida <= 0) {
      console.log(`${this.nome} foi derrotado!`);
    }
  }
}
