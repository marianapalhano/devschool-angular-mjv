import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
