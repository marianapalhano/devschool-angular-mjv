import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgosComponent } from './pages/ngos/ngos.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    NgosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NgosModule { }
