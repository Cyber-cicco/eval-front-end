import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { TarifsComponent } from './pages/tarifs/tarifs.component';
import { ContactComponent } from './pages/contact/contact.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GalerieComponent,
    TarifsComponent,
    ContactComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
