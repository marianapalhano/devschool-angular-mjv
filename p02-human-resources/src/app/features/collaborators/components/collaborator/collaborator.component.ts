import { Component, Input, OnInit } from '@angular/core';
import { Collaborator } from '../../models/collaborator.model';
import { faMoneyCheckAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  faMoneyCheckAlt = faMoneyCheckAlt;
  faTrashAlt = faTrashAlt;

  @Input()
  collaborator: Collaborator = {
    id: 0,
    nome: '',
    salario: 0,
    cargo: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  removeCollaborator() {
    alert("Colaborador removido com sucesso");
  }

}
