import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];

const components = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ...materialModules
  ],
  exports: [
    ...components,
    ...materialModules
  ]
})
export class SharedModule { }
