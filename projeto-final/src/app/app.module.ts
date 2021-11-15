import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { NgosModule } from './features/ngos/ngos.module';
import { PetsModule } from './features/pets/pets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    LoginModule,
    NgosModule,
    PetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
