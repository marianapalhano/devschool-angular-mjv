import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Adopter } from '../../models/adopter.model';
import { AdoptersService } from '../../services/adopters.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MsgDialogComponent } from 'src/app/shared/dialogs/msg-dialog/msg-dialog.component';
import { validatesCpf } from 'src/app/shared/validators/cpf/cpf-validator.directive';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  adopter: Adopter = this.adoptersService.getDefaultAdopter();

  hide = true;

  registerForm = new FormGroup({
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11), validatesCpf()]),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    birthdate: new FormControl('', Validators.required),  
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),    
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    complement: new FormControl(''),
    neighborhood: new FormControl('', [Validators.required, Validators.minLength(5)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    state: new FormControl('', [Validators.required])
  });  

  constructor(
    private adoptersService: AdoptersService, 
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValue = this.registerForm.value;
    this.adopter.cpf = formValue.cpf;
    this.adopter.name = formValue.name;
    this.adopter.birthdate = formValue.birthdate;
    this.adopter.email = formValue.email;
    this.adopter.password = formValue.password;
    this.adopter.phone = formValue.phone;
    this.adopter.address = formValue.address;
    this.adopter.complement = formValue.complement;
    this.adopter.neighborhood = formValue.neighborhood;
    this.adopter.location.city = formValue.city;
    this.adopter.location.state = formValue.state;

    this.adoptersService.createAdopter(this.adopter);
    this.dialog.open(MsgDialogComponent, {
      width: '320px',
      data: { title: 'Sucesso', message: 'Cadastro realizado.'}
    });
    this.router.navigateByUrl('/login');
  }

}
