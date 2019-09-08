import { CatalogueService } from './../catalogue/catalogue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  depots: any;
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
  }

  onDepot() {
    this.depots = 'addDepot';
  }

  onAjoutDepot(data) {

this.catalogueService.addDepot(data)
.subscribe ( (data: any) => {
 console.log(data);
}, (err: any) => {
  console.log(err);
});

  }

}
