import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { RegisterComponent } from './features/login/pages/register/register.component';
import { MemberDetailsComponent } from './features/members/pages/member-details/member-details.component';
import { MembersComponent } from './features/members/pages/members/members.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member-details/:id', component: MemberDetailsComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
