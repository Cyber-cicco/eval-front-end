import {Component, NgModule} from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'cp-galerie',
  styleUrls: ['galerie.component.scss'],
  templateUrl: './galerie.component.html',
})
export class GalerieComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  filtre:FormGroup;

  constructor(fb:FormBuilder) {
    this.filtre = fb.group({
      selecteur:["",[]]
    })
  }
}
