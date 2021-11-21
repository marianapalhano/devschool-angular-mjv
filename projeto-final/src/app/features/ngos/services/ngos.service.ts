import { Injectable } from '@angular/core';
import { Ngo } from '../models/ngo.model';

@Injectable({
  providedIn: 'root'
})
export class NgosService {
  ngos: Array<Ngo> = [
    {
      id: 1,
      imgUrl: '../../../../../assets/img/ongs/1.png',
      name: 'União de Proteção Animal de Salvador',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      description: 'Com o nosso trabalho retiramos inúmeros animais da rua, dando-lhes recuperação física e emocional, devolvendo-lhes dignidade e segurança e proporcionando a oportunidade de viverem feliz com uma família. Os animais que ainda não foram adotados recebem cuidados para estarem sempre saudáveis, bonitos e alegres.'
    },
    {
      id: 2,
      imgUrl: '../../../../../assets/img/ongs/2.png',
      name: 'Abrigo São Lázaro',
      location: {
          city: 'Fortaleza',
          state: 'CE'
      },
      description: 'Hoje a ONG São Lázaro se orgulha de ser a maior ong de proteção animal do Ceará, se orgulha por já ter mudado a vida de milhares de animais e muda até hoje.'
    },
    {
      id: 3,
      imgUrl: '../../../../../assets/img/ongs/3.png',
      name: 'Anjos do Poço',
      location: {
          city: 'Recife',
          state: 'PE'
      },
      description: 'Acreditamos que ter mais zelo, amor e empatia é a melhor maneira de estreitar os laços e lidar com desafios dos nossos amigos de quatro patas.'
    }
  ]

  constructor() { }

  getNgos() {
    return this.ngos;
  }
}
