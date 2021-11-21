import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';

@Component({
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  pet?: Pet;

  constructor(private petsService: PetsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pet = this.petsService.getPetById(params['id']);
    });
  }

}
