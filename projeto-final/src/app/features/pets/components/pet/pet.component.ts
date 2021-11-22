import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ngo } from 'src/app/features/ngos/models/ngo.model';
import { NgosService } from 'src/app/features/ngos/services/ngos.service';
import { Pet } from '../../models/pet.model';

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

  ngos: Array<Ngo> = [];
  ngoName: string = '';

  constructor(
    private ngosService: NgosService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {   

    this.activatedRoute.params.subscribe(params => {
      if (this.pet && params['id']) {
        this.ngos = this.ngosService.getNgos();
        this.ngos.filter(ngo => {
          if (ngo.id === this.pet?.ngoId) {
            this.ngoName = ngo.name;
          }
        });
      };
    });   
}

}
