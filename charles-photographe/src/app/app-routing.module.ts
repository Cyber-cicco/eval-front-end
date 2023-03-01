import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./pages/accueil/accueil.component";
import {TarifsComponent} from "./pages/tarifs/tarifs.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {GalerieComponent} from "./pages/galerie/galerie.component";

const routes: Routes = [
  {path:'accueil', component: AccueilComponent},
  {path:'tarifs', component: TarifsComponent},
  {path:'contact', component: ContactComponent},
  {path:'galerie', component: GalerieComponent},
  {path:'', component: AccueilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
