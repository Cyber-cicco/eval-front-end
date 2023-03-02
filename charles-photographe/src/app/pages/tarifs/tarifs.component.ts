import { Component } from '@angular/core';
import {PrestationsService} from "../../data/prestations.service";
import {Prestation} from "../../models/prestation";

@Component({
  selector: 'cp-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent {

  prestations:Prestation[];
  constructor(private prestationService:PrestationsService) {
    this.prestations = this.prestationService.prestations;
  }
}
