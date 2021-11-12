import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Array<Student> = [
    {
      id: 1,
      name: 'Daniela Lima Santos',
      email: 'danisantos@gmail.com',
      password: '12345678',
      monthlyFee: 350,
      inclusionDate: '2021-07-01',
      lastPayment: '2021-11-05',
      course: 'Angular/Node'
    },
    {
      id: 2,
      name: 'Bruno Freitas Melo',
      email: 'b.freitas@gmail.com',
      password: '12345678',
      monthlyFee: 400,
      inclusionDate: '2021-01-01',
      lastPayment: '2021-11-05',
      course: 'Java/Spring'
    },
    {
      id: 3,
      name: 'Clarisse Alves Barros',
      email: 'clarisse.barros@gmail.com',
      password: '12345678',
      monthlyFee: 400,
      inclusionDate: '2021-08-05',
      lastPayment: '2021-10-25',
      course: 'Angular/Node'
    },
    {
      id: 4,
      name: 'Lucas Fernandes Oliveira',
      email: 'lucasfoliveira@gmail.com',
      password: '12345678',
      monthlyFee: 380,
      inclusionDate: '2021-01-05',
      lastPayment: '2021-11-01',
      course: 'Angular/Node'
    },
    {
      id: 5,
      name: 'Virginia Sousa de Paula',
      email: 'vsdepaula@gmail.com',
      password: '12345678',
      monthlyFee: 380,
      inclusionDate: '2021-01-05',
      lastPayment: '2021-11-01',
      course: 'Angular/Node'
    },
  ];

  constructor() { }

  getStudents() {
    return this.students;
  }

  getStudentById(id: string) {
    return this.students.find(student => student.id === parseInt(id));
  }

  getStudentByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.students.find(student => student.email === email && student.password === password);
  }

  generateNextId() {
    return this.students[this.students.length - 1].id + 1;
  }

  getDefaultStudent(): Student {
    const TodaysDate = moment().format('YYYY/MM/DD');
    const newId = this.generateNextId();

    return {
      id: newId,
      name: '',
      email: '',
      password: '',
      monthlyFee: 0,
      inclusionDate: TodaysDate,
      lastPayment: TodaysDate,
      course: ''
    }
  }

  createStudent(student: Student) {
    this.students.push(student);
    return this.students;
  }
}
