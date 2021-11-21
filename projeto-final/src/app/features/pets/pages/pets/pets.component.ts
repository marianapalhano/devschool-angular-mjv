import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';

@Component({
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: Array<Pet> = [];

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.pets = this.petsService.getPets();
  }

}
