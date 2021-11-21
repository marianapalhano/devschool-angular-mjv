import { Injectable } from '@angular/core';
import { Ngo } from '../models/ngo.model';

@Injectable({
  providedIn: 'root'
})
export class NgosService {
  ngos: Array<Ngo> = [
    {
      id: 1,
      name: 'Associação dos Amigos dos Animais de Salvador',
      location: {
          city: 'Salvador',
          state: 'BA'
      }
    },
    {
      id: 2,
      name: 'Abrigo São Lázaro',
      location: {
          city: 'Fortaleza',
          state: 'CE'
      }
    },
    {
      id: 3,
      name: 'União Protetora São Francisco',
      location: {
          city: 'Recife',
          state: 'PE'
      }
    }
  ]

  constructor() { }

  getNgos() {
    return this.ngos;
  }
}
