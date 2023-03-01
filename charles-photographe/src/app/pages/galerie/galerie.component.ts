import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'cp-galerie',
  styleUrls: ['galerie.component.scss'],
  templateUrl: './galerie.component.html',
})
export class GalerieComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
