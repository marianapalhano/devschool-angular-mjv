import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/features/pets/models/pet.model';
import { PetsService } from 'src/app/features/pets/services/pets.service';
import { Adopter } from '../../models/adopter.model';
import { AdoptersService } from '../../services/adopters.service';

@Component({
  selector: 'app-adopter',
  templateUrl: './adopter.component.html',
  styleUrls: ['./adopter.component.scss']
})
export class AdopterComponent implements OnInit {
  @Input()
  adopter?: Adopter;

  @Input()
  card: boolean = true;

  myPets: Array<Pet> = [];
  pets: Array<Pet> = [];

  constructor(
    private adoptersService: AdoptersService, 
    private router: Router,
    private petsService: PetsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (this.adopter && params['id']) {
        this.pets = this.petsService.getPets();
        this.pets.filter(pet => {
          this.adopter?.pets.forEach(el => {
            if (pet.id === el) {
              this.myPets.push(pet);
            }
          });
        })
      }
    });
  }

  navigateToDetails() {
    this.router.navigateByUrl(`adopter-details/${this.adopter?.id}`);
  }
}
