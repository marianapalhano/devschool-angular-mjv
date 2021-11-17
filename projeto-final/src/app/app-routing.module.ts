import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './features/adopters/pages/register/register.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { HowtoHelpComponent } from './features/howto-help/pages/howto-help/howto-help.component';
import { NgosComponent } from './features/ngos/pages/ngos/ngos.component';
import { PetsComponent } from './features/pets/pages/pets/pets.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'ngos', component: NgosComponent },
  { path: 'howto-help', component: HowtoHelpComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
