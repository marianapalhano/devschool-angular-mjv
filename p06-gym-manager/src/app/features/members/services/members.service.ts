import { Injectable } from '@angular/core';
import { monitorEventLoopDelay } from 'perf_hooks';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: Array<Member> = [
      {
        id: 1,
        name: 'Daniela Santos',
        email: 'danisantos@gmail.com',
        password: '12345678',
        monthlyFee: 250,
        lastPayment: '2021-10-20',
        validRegistration: true,
        membership: 'Essential',
        startDate: '2021-07-01'
      },
      {
        id: 2,
        name: 'Bruno Guedes',
        email: 'b.guedes@gmail.com',
        password: '87654321',
        monthlyFee: 400,
        lastPayment: '2021-10-05',
        validRegistration: true,
        membership: 'Premium',
        startDate: '2020-09-01'
      },
      {
        id: 3,
        name: 'Clarisse Magno',
        email: 'clarisse.magno@gmail.com',
        password: 'a1b2c3d4',
        monthlyFee: 280,
        lastPayment: '2021-10-25',
        validRegistration: true,
        membership: 'Essential',
        startDate: '2019-01-20'
      },
      {
        id: 4,
        name: 'Lucas Fernandes Oliveira',
        email: 'lucasfoliveira@gmail.com',
        password: 'lucas123',
        monthlyFee: 220,
        lastPayment: '2021-10-15',
        validRegistration: true,
        membership: 'Essential',
        startDate: '2021-01-05'
      },
      {
        id: 5,
        name: 'Virginia Sousa de Paula',
        email: 'vsdepaula@gmail.com',
        password: 'vivi1234',
        monthlyFee: 320,
        lastPayment: '2021-10-02',
        validRegistration: true,
        membership: 'Ultimate',
        startDate: '2020-12-15'
      }
    ];

  constructor() { }

  getMembers() {
    return this.members;
  }

  getMemberById(id: number) {
    return this.members.find(member => member.id === Number(id));
  }
}
