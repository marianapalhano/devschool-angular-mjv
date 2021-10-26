import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students?: Array<Student> = [
    {
      id: 1,
      name: 'Daniela',
      membership: 350
    },
    {
      id: 2,
      name: 'Bruno',
      membership: 300
    },
    {
      id: 3,
      name: 'Clarisse',
      membership: 280
    },
    {
      id: 4,
      name: 'Lucas',
      membership: 320
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
