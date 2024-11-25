import Personagem from "./Personagem";

export class Habilidade {
    private nome: string;
    private descricao: string;
    private efeito: (personagem: Personagem) => void;
  
    constructor(nome: string, descricao: string, efeito: (personagem: Personagem) => void) {
      this.nome = nome;
      this.descricao = descricao;
      this.efeito = efeito;
    }
  
    usar(personagem: Personagem) {
      console.log(`${personagem.getNome()} usou a habilidade ${this.nome}`);
      this.efeito(personagem);
    }
  }
  