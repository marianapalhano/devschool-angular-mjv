import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';



@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
