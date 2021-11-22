import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Adopter } from '../../models/adopter.model';
import { AdoptersService } from '../../services/adopters.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  adopter: Adopter = this.adoptersService.getDefaultAdopter();

  hide = true;

  registerForm = new FormGroup({
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    birthdate: new FormControl('', Validators.required),  
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),    
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    complement: new FormControl(''),
    neighborhood: new FormControl('', [Validators.required, Validators.minLength(5)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    state: new FormControl('')
  });  

  constructor(private adoptersService: AdoptersService, private router: Router) { }

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
    this.router.navigateByUrl('/login');
  }

}
