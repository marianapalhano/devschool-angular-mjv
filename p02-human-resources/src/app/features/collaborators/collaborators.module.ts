import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsListComponent } from './components/collaborators-list/collaborators-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';


@NgModule({
  declarations: [
    CollaboratorsListComponent,
    CollaboratorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CollaboratorsListComponent
  ]
})
export class CollaboratorsModule { }
