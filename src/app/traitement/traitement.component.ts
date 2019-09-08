import { CatalogueService } from './../catalogue/catalogue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit {
  envoie: any;
  retrait: any;

  constructor(private cataloge: CatalogueService) { }

  ngOnInit() {
  }

  onEffectuerEnvoie() {
this.envoie = 'addenvoie';
  }

  onEffectuerRetrait() {
    this.retrait = 'addretrait';
      }
onEnvoie(data) {

  this.cataloge.addenvoie(data)
.subscribe ( (data: any) => {
 // this.envoie = data;
 console.log (data);
}, (err: any) => {
  console.log(err);
});
}

onRetrait(data) {

  this.cataloge.addretrait(data)
.subscribe ( (data: any) => {
 console.log (data);
}, (err: any) => {
  console.log(err);
});
}
}
