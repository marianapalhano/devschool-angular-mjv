import { Injectable } from '@angular/core';
import { Breed, Gender, Pet, Size, Species } from '../models/pet.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  pets: Array<Pet> = [
    {
      id: 1,
      imgUrl: '../../../../../assets/img/pets/1.jpg',
      name: 'Cocada',
      gender: 'Fêmea',
      age: '6 meses',
      microchip: 123456789012345,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Pequeno',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      ngoId: 1,
      personality: 'Pet dócil, alegre e ama brincar.',
      inclusionDate: '2021-05-22',
      adoptionFee: 30,
      isAdopted: true
    },
    {
      id: 2,
      imgUrl: '../../../../../assets/img/pets/2.jpg',
      name: 'Kira',
      gender: 'Fêmea',
      age: '2 meses',
      microchip: 123450987543257,
      species: 'Gato',
      breed: 'SRD',
      size: 'Pequeno',
      location: {
          city: 'Fortaleza',
          state: 'CE'
      },
      ngoId: 2,
      personality: 'Pet dócil, carinhosa e comilona.',
      inclusionDate: '2021-10-19',
      adoptionFee: 20,
      isAdopted: true
    },
    {
      id: 3,
      imgUrl: '../../../../../assets/img/pets/3.jpg',
      name: 'Nutella',
      gender: 'Fêmea',
      age: '4 meses',
      microchip: 123456789009876,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Médio',
      location: {
          city: 'Recife',
          state: 'PE'
      },
      ngoId: 3,
      personality: 'Pet dorminhoca, alegre e sociável.',
      inclusionDate: '2021-09-15',
      adoptionFee: 30,
      isAdopted: false
    },
    {
      id: 4,
      imgUrl: '../../../../../assets/img/pets/4.jpg',
      name: 'Max',
      gender: 'Macho',
      age: '3 meses',
      microchip: 121212121212123,
      species: 'Cachorro',
      breed: 'Maltês',
      size: 'Pequeno',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      ngoId: 1,
      personality: 'Pet sociável, brincalhão e alegre.',
      inclusionDate: '2021-09-29',
      adoptionFee: 30,
      isAdopted: false
    },
    {
      id: 5,
      imgUrl: '../../../../../assets/img/pets/5.jpg',
      name: 'Baruk',
      gender: 'Macho',
      age: '2 anos 3 meses',
      microchip: 998877665544332,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Grande',
      location: {
          city: 'Fortaleza',
          state: 'CE'
      },
      ngoId: 2,
      personality: 'Pet dócil e sociável com pessoas e cães.',
      inclusionDate: '2021-07-02',
      adoptionFee: 15,
      isAdopted: false
    },
    {
      id: 6,
      imgUrl: '../../../../../assets/img/pets/6.jpg',
      name: 'Fubá',
      gender: 'Macho',
      age: '2 meses',
      microchip: 555555555555555,
      species: 'Gato',
      breed: 'Angora',
      size: 'Médio',
      location: {
          city: 'Recife',
          state: 'PE'
      },
      ngoId: 3,
      personality: 'Pet brincalhão e muito carinhoso.',
      inclusionDate: '2021-11-05',
      adoptionFee: 30,
      isAdopted: false
    },
    {
      id: 7,
      imgUrl: '../../../../../assets/img/pets/7.jpg',
      name: 'Panqueca',
      gender: 'Fêmea',
      age: '4 meses',
      microchip: 999999999999999,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Pequeno',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      ngoId: 1,
      personality: 'Pet divertida, tranquila e sociável.',
      inclusionDate: '2021-10-02',
      adoptionFee: 30,
      isAdopted: false
    },
    {
      id: 8,
      imgUrl: '../../../../../assets/img/pets/8.jpg',
      name: 'Mel',
      gender: 'Fêmea',
      age: '4 meses',
      microchip: 888888888888888,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Pequeno',
      location: {
          city: 'Fortaleza',
          state: 'CE'
      },
      ngoId: 2,
      personality: 'Pet curiosa, sociável e brincalhona.',
      inclusionDate: '2021-09-18',
      adoptionFee: 25,
      isAdopted: false
    },
    {
      id: 9,
      imgUrl: '../../../../../assets/img/pets/9.jpg',
      name: 'Theo',
      gender: 'Macho',
      age: '5 anos',
      microchip: 111111111111111,
      species: 'Gato',
      breed: 'SRD',
      size: 'Grande',
      location: {
          city: 'Recife',
          state: 'PE'
      },
      ngoId: 3,
      personality: 'Pet carinhoso, curioso e apegado a todos.',
      inclusionDate: '2021-01-20',
      adoptionFee: 0,
      isAdopted: false
    },
    {
      id: 10,
      imgUrl: '../../../../../assets/img/pets/10.jpg',
      name: 'Amora',
      gender: 'Fêmea',
      age: '6 anos',
      microchip: 222222222222222,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Médio',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      ngoId: 1,
      personality: 'Pet tranquila, dócil e companheira.',
      inclusionDate: '2020-04-26',
      adoptionFee: 0,
      isAdopted: false
    },
    {
      id: 11,
      imgUrl: '../../../../../assets/img/pets/11.jpg',
      name: 'Snow',
      gender: 'Macho',
      age: '2 meses',
      microchip: 333333333333333,
      species: 'Gato',
      breed: 'SRD',
      size: 'Médio',
      location: {
          city: 'Fortaleza',
          state: 'CE'
      },
      ngoId: 2,
      personality: 'Pet comilão, brincalhão e divertido.',
      inclusionDate: '2021-10-08',
      adoptionFee: 30,
      isAdopted: false
    },
    {
      id: 12,
      imgUrl: '../../../../../assets/img/pets/12.jpg',
      name: 'Luna',
      gender: 'Fêmea',
      age: '2 meses',
      microchip: 444444444444444,
      species: 'Gato',
      breed: 'SRD',
      size: 'Médio',
      location: {
          city: 'Recife',
          state: 'PE'
      },
      ngoId: 3,
      personality: 'Pet dócil, brincalhão e esperto.',
      inclusionDate: '2021-11-03',
      adoptionFee: 30,
      isAdopted: false
    },
    {
      id: 13,
      imgUrl: '../../../../../assets/img/pets/13.jpg',
      name: 'Apolo',
      gender: 'Macho',
      age: '9 anos',
      microchip: 666666666666666,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Grande',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      ngoId: 1,
      personality: 'Pet tranquilo e muito dócil, companheiro.',
      inclusionDate: '2020-03-13',
      adoptionFee: 0,
      isAdopted: false
    },
    {
      id: 14,
      imgUrl: '../../../../../assets/img/pets/14.jpg',
      name: 'Frida',
      gender: 'Fêmea',
      age: '2 anos',
      microchip: 777777777777777,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Médio',
      location: {
          city: 'Fortaleza',
          state: 'CE'
      },
      ngoId: 2,
      personality: 'Pet carinhosa, dócil, adora outros cães.',
      inclusionDate: '2020-10-30',
      adoptionFee: 0,
      isAdopted: false
    },
    {
      id: 15,
      imgUrl: '../../../../../assets/img/pets/15.jpg',
      name: 'Paçoca',
      gender: 'Macho',
      age: '9 meses',
      microchip: 888888888888888,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Pequeno',
      location: {
          city: 'Recife',
          state: 'PE'
      },
      ngoId: 3,
      personality: 'Pet alegre, brincalhão e curioso.',
      inclusionDate: '2021-06-14',
      adoptionFee: 20,
      isAdopted: false
    },
    {
      id: 16,
      imgUrl: '../../../../../assets/img/pets/16.jpg',
      name: 'Fiona',
      gender: 'Fêmea',
      age: '10 meses',
      microchip: 909090909090909,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Pequeno',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      ngoId: 1,
      personality: 'Pet sociável, dócil e carinhosa.',
      inclusionDate: '2021-08-11',
      adoptionFee: 20,
      isAdopted: false
    },
    {
      id: 17,
      imgUrl: '../../../../../assets/img/pets/17.jpg',
      name: 'Bruce',
      gender: 'Macho',
      age: '5 anos',
      microchip: 909090909098888,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Grande',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      ngoId: 1,
      personality: 'Pet dócil, brincalhão e carinhoso.',
      inclusionDate: '2019-03-19',
      adoptionFee: 0,
      isAdopted: false
    },
    {
      id: 18,
      imgUrl: '../../../../../assets/img/pets/18.jpg',
      name: 'Pipoca',
      gender: 'Fêmea',
      age: '1 ano 5 meses',
      microchip: 6767676767567676,
      species: 'Cachorro',
      breed: 'SRD',
      size: 'Médio',
      location: {
          city: 'Salvador',
          state: 'BA'
      },
      ngoId: 1,
      personality: 'Pet alegre, dócil e sociável.',
      inclusionDate: '2021-05-07',
      adoptionFee: 20,
      isAdopted: false
    }
  ]

  constructor() { }

  getPets() {
    return this.pets;
  }

  getPetsForAdoption() {
    return this.pets.filter(pet => pet.isAdopted === false);
  }

  getAdoptedPets() {
    return this.pets.filter(pet => pet.isAdopted === true);
  }

  getPetById(id: number) {
    return this.pets.find(pet => pet.id === Number(id));
  }

  getPetByGender(gender: Gender) {
    return this.pets.find(pet => pet.gender === gender);
  }

  getPetBySpecies(species: Species) {
    return this.pets.find(pet => pet.species === species);
  }

  createPet(pet: Pet) {
    this.pets.push(pet);
    return this.pets;
  }

  createPetObject(
    id: number,
    imgUrl: string,
    name: string,
    gender: Gender,
    age: string,
    microchip: number,
    species: Species,
    breed: Breed,
    size: Size,
    location: {
        city: string,
        state: string
    },
    ngoId: number,
    personality: string,
    inclusionDate: Date | string,
    adoptionFee: number,
    isAdopted: boolean
  ) {
    return {
      id,
      imgUrl,
      name,
      gender,
      age,
      microchip,
      species,
      breed,
      size,
      location,
      ngoId,
      personality,
      inclusionDate,
      adoptionFee,
      isAdopted
    };
  }

  getDefaultPet(): Pet {
    const todaysDate = moment().format('YYYY-MM-DD');
    const nextId = this.generateNextId();
    return this.createPetObject(
      nextId,
      `../../../../../assets/img/pets/${nextId}.jpg`,
      '',
      'Fêmea',
      '',
      0,
      'Cachorro',
      'SRD',
      'Médio',
      { city: '', state: '' },
      0,
      '',
      todaysDate,
      0,
      false
    );
  }

  generateNextId(): number {
    return this.pets[(this.pets.length - 1)].id + 1;
  }

  removePet(id: number) {
    const petIndex = this.pets.findIndex((pet) => pet.id === Number(id));
    this.pets.splice(petIndex, 1);
  }
}
