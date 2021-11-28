import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';

@Component({
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: Array<Pet> = [];
  filteredPets: Array<Pet> = [];
  selectedState?: string = '';
  selectedSpecies?: string = '';

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.pets = this.petsService.getPetsForAdoption();
    this.filteredPets = this.pets;
  }

  filterPets() {
    if (this.selectedState) {
      this.filteredPets = this.pets.filter(pet => {
        return pet.location.state === this.selectedState;        
      });
    }

    if (this.selectedSpecies) {
      this.filteredPets = this.pets.filter(pet => {
        return pet.species === this.selectedSpecies;
      })
    }

    if (this.selectedSpecies && this.selectedState) {
      this.filteredPets = this.pets.filter(pet => {
        return pet.species === this.selectedSpecies && pet.location.state === this.selectedState;
      })
    }

    if (this.filteredPets?.length === 0 && !(this.selectedState || this.selectedSpecies)) {
      this.filteredPets = this.pets;
    } 
  }
}
