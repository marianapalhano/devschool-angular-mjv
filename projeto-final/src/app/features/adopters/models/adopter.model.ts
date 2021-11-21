export interface Adopter {
    id: number,
    cpf: number,
    name: string,
    birthdate: Date | string,
    email: string,
    password: string,
    phone: number,
    address: string,
    complement?: string,
    neighborhood: string,
    location: {
        city: string,
        state: string
    },
    pets: Array<number>;
}