import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsListComponent } from './components/collaborators-list/collaborators-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CollaboratorsListComponent
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
