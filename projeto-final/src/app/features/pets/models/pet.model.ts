export type Gender = 'male' | 'female';
export type Species = 'dog' | 'cat' | 'rodent' | 'bird';
export type Breed = 'SRD' | 'Poodle' | 'Labrador' | 'Siames' | 'Angora';
export type Size = 'Pequeno' | 'Médio' | 'Grande';

export interface Pet {
    id: number,
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
    inclusionDate: Date | string
    adoptionFee: number
}