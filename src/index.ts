import { Console } from 'console';
import Arma from './classes/Armas';
import Personagem from './classes/Personagem';

const meuPersonagem = new Personagem('Tiago', 300, 100);

const espada = new Arma('Espada longa', 'Uma espada longa e afiada', 10);

console.log(meuPersonagem.getNome());
meuPersonagem.setArma(espada);

console.log('Arma', meuPersonagem.getArma());

meuPersonagem.receberDano(100);
console.log(meuPersonagem.getVida());

meuPersonagem.equiparArma(espada);
