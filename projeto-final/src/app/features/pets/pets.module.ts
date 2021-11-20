import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pages/pets/pets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PetDetailsComponent } from './pages/pet-details/pet-details.component';
import { PetComponent } from './components/pet/pet.component';
import { PetListComponent } from './components/pet-list/pet-list.component';



@NgModule({
  declarations: [
    PetsComponent,
    PetDetailsComponent,
    PetComponent,
    PetListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PetsModule { }
