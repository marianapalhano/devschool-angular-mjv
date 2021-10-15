import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../../models/collaborator.model';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  collaborator: Collaborator = {
    id: 0,
    nome: '',
    salario: 0,
    cargo: ''
};

  constructor() { }

  ngOnInit(): void {
  }

}
