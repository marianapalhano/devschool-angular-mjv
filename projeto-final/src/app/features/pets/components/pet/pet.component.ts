import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Adopter } from 'src/app/features/adopters/models/adopter.model';
import { AdopterDetailsComponent } from 'src/app/features/adopters/pages/adopter-details/adopter-details.component';
import { AdoptersService } from 'src/app/features/adopters/services/adopters.service';
import { LoginService } from 'src/app/features/login/services/login.service';
import { Ngo } from 'src/app/features/ngos/models/ngo.model';
import { NgosService } from 'src/app/features/ngos/services/ngos.service';
import { MsgDialogComponent } from 'src/app/shared/dialogs/msg-dialog/msg-dialog.component';
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
  card: boolean = false;

  ngos: Array<Ngo> = [];
  ngoName: string = '';

  adopter?: Adopter;

  adoptersPet: boolean = false;

  constructor(
    private ngosService: NgosService, 
    private activatedRoute: ActivatedRoute,
    private adoptersService: AdoptersService,
    private router: Router,
    private dialog: MatDialog,
    private loginService: LoginService
  ) { 

    loginService.loggedAdopter.subscribe(value => {
      this.adopter = value;
    })
  }

  ngOnInit(): void {   

    if (this.pet) {
      this.ngos = this.ngosService.getNgos();
      this.ngos.filter(ngo => {
        if (ngo.id === this.pet?.ngoId) {
          this.ngoName = ngo.name;
        }
      });
    };

    if (this.activatedRoute.component === AdopterDetailsComponent) {
      this.adoptersPet = true;
    }
  }


  makeAdoption() {
    if (this.adopter && this.pet) {
      this.pet.isAdopted = true;
      // adiciona pet no array pets do this.adopter
      this.adoptersService.addPetToAdopter(this.adopter.id, this.pet.id);
      this.dialog.open(MsgDialogComponent, {
        width: '350px',
        data: { title: 'Parabéns', message: 'Você iniciou o processo de adoção.' }
      });
      this.router.navigateByUrl(`/adopter-details/${this.adopter.id}`);
    } else {
      this.dialog.open(MsgDialogComponent, {
        width: '350px',
        data: { title: 'Alerta', message: 'Você precisa fazer login para acessar a adoção.' }
      })
    }
  }

}
