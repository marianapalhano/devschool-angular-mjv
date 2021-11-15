export interface Adopter {
    id: number,
    cpf: number,
    name: string,
    birthdate: Date | string,
    email: string,
    phone: number,
    address: string,
    complement: string,
    neighborhood: string,
    location: {
        city: string,
        state: string
    }
}