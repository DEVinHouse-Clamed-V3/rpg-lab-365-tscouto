// import { Console } from 'console';
// import Arma from './classes/Armas';
// import Personagem from './classes/Personagem';
// import inimigo from './classes/Inimigo';
// import Chefe from './classes/Chefe';

// const meuPersonagem = new Personagem('Tiago', 300, 300);

// const espada = new Arma('Espada longa', 'Uma espada longa e afiada', 10);

// console.log(meuPersonagem.getNome());
// meuPersonagem.setArma(espada);

// console.log('Arma', meuPersonagem.getArma());

// meuPersonagem.receberDano(100);
// console.log(meuPersonagem.getVida());

// meuPersonagem.equiparArma(espada);

// const esqueleto = new inimigo('Esqueleto', 100, 20);
// const chefeOrc = new Chefe('Grande Orc', 500, 50);
// esqueleto.atacar(meuPersonagem);
// console.log(meuPersonagem.getVida());
// meuPersonagem.atacar(chefeOrc);

// console.log(chefeOrc.getVida());
import Jogo from './classes/Jogo';
const jogo = new Jogo();
jogo.iniciar();
