import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { RegisterComponent } from './features/login/pages/register/register.component';
import { MembersComponent } from './features/members/pages/members/members.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/students' },
  { path: 'login', component: LoginComponent },
  { path: 'students', component: MembersComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
