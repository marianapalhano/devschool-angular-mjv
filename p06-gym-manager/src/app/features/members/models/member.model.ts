export interface Member {
    id: number,
    name: string,
    email: string,
    password: string,
    monthlyFee: number,
    lastPayment: string | Date,
    validRegistration: boolean,
    membership: 'Essential' | 'Ultimate' | 'Premium',
    startDate: string | Date
}