import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue/catalogue.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  ajout: string;

  roles = ['ADMIN_PARTENAIRE', 'CAISSIER_PARTENAIRE'];
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
  }
  onAjout() {
    this.ajout = 'addUse';
    }

    onSaveUse(data) {
      /* console.log(data); */
      const url = this.catalogueService.ajoutEm ;
     // console.log(data);
      this.catalogueService.adduser(url, data)
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe ( data => {
        this.getAllUser(); console.log(data);
      }, err => {
        console.log(err);
      });
    }
  getAllUser() {
    throw new Error('Method not implemented.');
  }
}
