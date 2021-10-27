import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  members?: Array<Member> = [
    {
      id: 1,
      name: 'Daniela',
      membership: 350,
      lastPayment: '2021-10-20',
      startDate: '2021-07-01'
    },
    {
      id: 2,
      name: 'Bruno',
      membership: 300,
      lastPayment: '2021-10-05',
      startDate: '2020-09-01'
    },
    {
      id: 3,
      name: 'Clarisse',
      membership: 280,
      lastPayment: '2021-10-25',
      startDate: '2019-01-20'
    },
    {
      id: 4,
      name: 'Lucas',
      membership: 320,
      lastPayment: '2021-10-15',
      startDate: '2021-01-05'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
