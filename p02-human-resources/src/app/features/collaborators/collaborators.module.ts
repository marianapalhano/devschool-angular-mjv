import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsListComponent } from './components/collaborators-list/collaborators-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CollaboratorsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    CollaboratorsListComponent
  ]
})
export class CollaboratorsModule { }
