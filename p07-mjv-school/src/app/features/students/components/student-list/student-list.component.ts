import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students?: Array<Student> = [];
  filteredStudents?: Array<Student> = [];
  searchBy?: string = 'name';

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.students = this.studentsService.getStudents();
    this.filteredStudents = this.students;
  }

  getStudentsByName(event: any) {
    const term = event.target.value;
  }

  searchStudent(event: any) {
    const term = event?.target.value;

    if (this.searchBy === 'name') {
      this.filteredStudents = this.students?.filter(student => {
        return student.name.toUpperCase().search(term.toUpperCase()) > -1;
      });
    } else if (this.searchBy === 'id') {
        this.filteredStudents = this.students?.filter(student => {
          return student.id === parseInt(term);
        });
    }

    if (this.filteredStudents?.length === 0 && term.length === 0) {
      this.filteredStudents = this.students;
    } 
  }
}
