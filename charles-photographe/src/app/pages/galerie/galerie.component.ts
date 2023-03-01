import {Component, NgModule} from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'cp-galerie',
  styleUrls: ['galerie.component.scss'],
  templateUrl: './galerie.component.html',
})
export class GalerieComponent {
  filtre:FormGroup;

  imagesDisplay:string[] = ["assets/photos/mariage/1.png", "assets/photos/mariage/2.png"];

  images = {
    "mariage": ["1","2","3","4"],
    "grossesse":["1","2","3","4"],
    "bebe":["1","2","3","4"],
    "famille":["1","2","3","4"],
    "bapteme":["1","2","3","4"],
    "couple":["1","2","3","4"]
  };


  constructor(fb:FormBuilder) {
    this.filtre = fb.group({
      selecteur:["",[]]
    });
  }

  get selecteur(){
    return this.filtre.get("selecteur");
  }

  changePhotos(value:string) {
    console.log(value);
    // @ts-ignore
    this.imagesDisplay =  this.images[value].map(val => "assets/photos/" + value + "/"+val+".png");
  }
}
