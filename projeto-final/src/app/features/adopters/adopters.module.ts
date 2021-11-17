import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptersComponent } from './pages/adopters/adopters.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AdoptersComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdoptersModule { }
