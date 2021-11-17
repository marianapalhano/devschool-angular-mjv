import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pages/pets/pets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PetDetailsComponent } from './pages/pet-details/pet-details.component';



@NgModule({
  declarations: [
    PetsComponent,
    PetDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PetsModule { }