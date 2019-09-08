import { Component , OnInit , ViewChild} from '@angular/core';
import { CatalogueService } from '../catalogue/catalogue.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {

  NomComplet: string;
  Email: string;
  NCI: any;
  IsActive: boolean;
}


@Component({
  selector: 'app-liste-partenaire',
  templateUrl: './liste-partenaire.component.html',
  styleUrls: ['./liste-partenaire.component.css']
})
export class ListePartenaireComponent implements OnInit {
  displayedColumns: string[] = ['NomComplet', 'Email', 'NCI', 'IsActive'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  [x: string]: any;
  user;
  affiche = false;

roles = ['ADMIN_SYSTEM', 'CAISSIER'];
 ajout;



  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.catalogueService.getAllUser()
    .subscribe (data => {
      // tslint:disable-next-line: no-unused-expression500
      this.user = data;
      this.affiche = true;
      this.dataSource = new MatTableDataSource(this.user);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
      let url = this.catalogueService.ajoutPartenaire ;
      this.catalogueService.addPartenaire(url, data)
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe( data => {
        this.getAllUser();
        console.log(data);
      }, err => {
        console.log(err);
      });
    }
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
