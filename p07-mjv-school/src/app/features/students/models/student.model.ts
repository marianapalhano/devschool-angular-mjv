export interface Student {
    id: number,
    name: string,
    email: string,
    password: string,
    monthlyFee: number,
    inclusionDate: string | Date,
    lastPayment: Date | string,
    course: string    
}