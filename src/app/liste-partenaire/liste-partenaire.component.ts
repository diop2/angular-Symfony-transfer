import { Component , OnInit , ViewChild} from '@angular/core';
import { CatalogueService } from '../catalogue/catalogue.service';



@Component({
  selector: 'app-liste-partenaire',
  templateUrl: './liste-partenaire.component.html',
  styleUrls: ['./liste-partenaire.component.css']
})
export class ListePartenaireComponent implements OnInit {
  [x: string]: any;
  user;

roles = ['ADMIN_SYSTEM', 'CAISSIER'];
 ajout;



  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser(){
    this.catalogueService.getAllUser()
    .subscribe (data => {
      // tslint:disable-next-line: no-unused-expression500
      this.user = data ;
    }, err => {
      console.log(err) ;
    });
  }
  onAjout() {
    this.ajout = 'addUser';
    }

    onAjoutPartenaire() {
      this.ajout = 'addPartenaire';
      }

    onSaveUser(data) {
      /* console.log(data); */
      let url = this.catalogueService.ajoutEm ;
     // console.log(data);
      this.catalogueService.adduser(url, data)
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe( data => {
        this.getAllUser();
        console.log(data);
      }, err => {
        console.log(err);
      });
    }

    onSavePartenaire(data) {
      /* console.log(data); */
      let url = this.catalogueService.ajoutPartenaire ;
     // console.log(data);
      this.catalogueService.addPartenaire(url, data)
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe( data => {
        this.getAllUser();
        console.log(data);
      }, err => {
        console.log(err);
      });
    }

}
