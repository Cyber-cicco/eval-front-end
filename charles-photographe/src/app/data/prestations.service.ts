import { Injectable } from '@angular/core';
import {Prestation} from "../models/prestation";

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  constructor() { }

  prestations:Prestation[] = [
    {titre : "Juste moi", prix: 130, description : "Séance pour une personne, en extérieur ou en studio"},
    {titre : " Pour deux", prix: 195, description : "Pour deux personnes, en extérieur ou en studio"},
    {titre : " Famille", prix: 220, description : "Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio\n" +
        "30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)"},
    {titre : " Il était une fois", prix: 160, description : "Photo de grossesse (À votre domicile, en extérieur ou en studio)"},
    {titre : " Mon bébé", prix: 160, description : "Photo de grossesse (À votre domicile, en extérieur ou en studio)"},
    {titre : "J'immortalise l'événement", prix: undefined, description : "Prestation de mariage ou baptême sur devis"},

  ]
}
