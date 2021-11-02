export interface Member {
    id: number,
    memberImg: string,
    name: string,
    email: string,
    password: string,
    monthlyFee: number,
    lastPayment: string | Date,
    validRegistration: boolean,
    membership: 'Essential' | 'Ultimate' | 'Premium',
    startDate: string | Date
}