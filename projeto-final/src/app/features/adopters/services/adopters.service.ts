import { Injectable } from '@angular/core';
import { Adopter } from '../models/adopter.model';

@Injectable({
  providedIn: 'root'
})
export class AdoptersService {
  adopters: Array<Adopter> = [
    {
      id: 1,
      cpf: 51700369903,
      name: 'Ricardo Sales Almeida',
      birthdate: '1994-03-24',
      email: 'ric.salesalmeida@gmail.com',
      password: '123456',
      phone: 71988563773,
      address: 'Rua Hilton Rodrigues, 394',
      complement: '',
      neighborhood: 'Pituba',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      pets: []
    },
    {
      id: 2,
      cpf: 30584392532,
      name: 'Mirtes Setubal Ritz',
      birthdate: '1975-11-12',
      email: 'mirtes.setubal@gmail.com',
      password: '654321',
      phone: 71999375886,
      address: 'Avenida Estados Unidos, 47',
      complement: 'Apto 1202',
      neighborhood: 'Comércio',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      pets: []
    },
    {
      id: 3,
      cpf: 87553769401,
      name: 'Ana Paula Fernandes Souza',
      birthdate: '1985-01-09',
      email: 'ana.fsouza@gmail.com',
      password: '098765',
      phone: 85999761225,
      address: 'Avenida Dom Luís, 36',
      complement: 'Apto 1403',
      neighborhood: 'Aldeota',
      location: {
          city: 'Fortaleza',
          state: 'CE'
      },
      pets: []
    },
    {
      id: 4,
      cpf: 24797884665,
      name: 'João Paulo Rodrigues Lima',
      birthdate: '1999-03-30',
      email: 'jprodrigues@gmail.com',
      password: '010203',
      phone: 85988387640,
      address: 'Rua Barão de Aratanha, 1245',
      complement: '',
      neighborhood: 'Fátima',
      location: {
          city: 'Fortaleza',
          state: 'CE'
      },
      pets: []
    },
    {
      id: 5,
      cpf: 16294478030,
      name: 'Denise Moreira de Paula',
      birthdate: '1980-12-13',
      email: 'denise.moreira@gmail.com',
      password: '666666',
      phone: 81987358776,
      address: 'Avenida Cais do Apolo, 925',
      complement: 'Apto 1201',
      neighborhood: 'Bairro do Recife',
      location: {
          city: 'Recife',
          state: 'PE'
      },
      pets: []
    },
    {
      id: 6,
      cpf: 22614463574,
      name: 'Júlio Braga de Alencar',
      birthdate: '1998-04-18',
      email: 'julioalencar@gmail.com',
      password: '000000',
      phone: 8132562389,
      address: 'Rua João Fernandes Vieira, 405',
      complement: '',
      neighborhood: 'Boa Vista',
      location: {
          city: 'Recife',
          state: 'PE'
      },
      pets: []
    }
  ]

  constructor() { }

  getAdopters() {
    return this.adopters;
  }

  getAdopterById(id: number) {
    return this.adopters.find((adopter) => adopter.id === Number(id));
  }

  getAdopterByName(name: string) {
    return this.adopters.find((adopter) => adopter.name === name);
  }

  getAdopterByEmailAndPassword(email: string, password: string) {
    return this.adopters.find((adopter) => adopter.email === email && adopter.password === password);
  }
}
