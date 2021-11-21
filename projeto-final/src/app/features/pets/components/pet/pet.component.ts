import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  @Input()
  pet?: Pet;

  @Input()
  card: boolean = true;

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
  }

}
