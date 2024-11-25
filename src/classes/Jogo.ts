import Personagem from './Personagem';
import Inimigo from './Inimigo';
import Chefe from './Chefe';
import Arma from './Armas';
const prompt = require('prompt-sync')();

export default class Jogo {
  private turno: number = 0;

  // Função para criar um personagem a partir de dados do usuário
  private criarPersonagem(): Personagem {
    const nome = prompt('Digite o nome do personagem: ') || 'Herói';
    const vida = parseInt(prompt('Digite a vida do personagem: ') || '100', 10);
    const forca = parseInt(
      prompt('Digite a força do personagem: ') || '10',
      10
    );
    const agilidade = parseInt(
      prompt('Digite a agilidade do personagem: ') || '5',
      10
    );
    const dano = parseInt(prompt('Digite o dano do personagem: ') || '10', 10);

    const personagem = new Personagem(nome, vida, forca, agilidade, dano);
    const nomeArma = prompt('Digite o nome da arma: ') || 'Espada';
    const descricaoArma =
      prompt('Digite a descrição da arma: ') || 'Espada poderosa';
    const danoArma = parseInt(prompt('Digite o dano da arma: ') || '15', 10);

    const arma = new Arma(nomeArma, descricaoArma, danoArma);
    personagem.equiparArma(arma);

    return personagem;
  }

  // Função para criar um inimigo a partir de dados do usuário
  private criarInimigo(): Inimigo {
    const nome = prompt('Digite o nome do inimigo: ') || 'Goblin';
    const vida = parseInt(prompt('Digite a vida do inimigo: ') || '50', 10);
    const forca = parseInt(prompt('Digite a força do inimigo: ') || '10', 10);
    const agilidade = parseInt(
      prompt('Digite a agilidade do inimigo: ') || '3',
      10
    );
    const dano = parseInt(prompt('Digite o dano do inimigo: ') || '5', 10);

    return new Inimigo(nome, vida, forca, agilidade, dano);
  }

  // Função para criar um chefe a partir de dados do usuário
  private criarChefe(): Chefe {
    const nome = prompt('Digite o nome do chefe: ') || 'Dragão';
    const vida = parseInt(prompt('Digite a vida do chefe: ') || '200', 10);
    const forca = parseInt(prompt('Digite a força do chefe: ') || '30', 10);
    const agilidade = parseInt(
      prompt('Digite a agilidade do chefe: ') || '10',
      10
    );
    const dano = parseInt(prompt('Digite o dano do chefe: ') || '8', 10);

    return new Chefe(nome, vida, forca, agilidade, dano);
  }

  // Função principal de jogar
  private jogar(personagem: Personagem, inimigo: Inimigo) {
    console.log(`Turno: ${this.turno}`);
    if (this.turno % 2 === 0) {
      personagem.atacar(inimigo);
    } else {
      inimigo.atacar(personagem);
    }
    this.turno++;
  }

  // Função para iniciar o jogo
  iniciar() {
    const personagem = this.criarPersonagem();
    const inimigo1 = this.criarInimigo();
    const chefe = this.criarChefe();

    while (
      personagem.getVida() > 0 &&
      (inimigo1.getVida() > 0 || chefe.getVida() > 0)
    ) {
      this.jogar(personagem, inimigo1);
      if (inimigo1.getVida() <= 0) {
        console.log('Inimigo derrotado!');
        break;
      }
      this.jogar(personagem, chefe);
      if (chefe.getVida() <= 0) {
        console.log('Chefe derrotado!');
        break;
      }
    }
  }
}
