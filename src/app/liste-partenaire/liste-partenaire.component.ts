import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue/catalogue.service';

@Component({
  selector: 'app-liste-partenaire',
  templateUrl: './liste-partenaire.component.html',
  styleUrls: ['./liste-partenaire.component.css']
})
export class ListePartenaireComponent implements OnInit {

  user = [];

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.catalogueService.getAllUser()
    .subscribe(data => {
      // tslint:disable-next-line: no-unused-expression
      this.user ;
    }, err => {
      console.log(err) ;
    });
  }
}
