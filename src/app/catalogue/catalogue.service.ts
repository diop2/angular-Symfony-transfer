import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  constructor(private http: HttpClient) { }

  public host = 'http://localhost:8000/api/listUser';
  public ajoutEm = 'http://localhost:8000/api/employer';
  public ajoutPartenaire = 'http://localhost:8000/api/partenaire';
  getAllUser() {
   // return this.http.get(this.host + '/user');
   let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
   return this.http.get<any>(this.host, { headers });
  }

  getRessource(url) {
    return this.http.get(url);
  }

  adduser(ajoutEm, data) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // tslint:disable-next-line: object-literal-shorthand
    console.log(data);
    return this.http.post(ajoutEm, data, { headers: headers});
  }
  addPartenaire(addPartenaire, data) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // tslint:disable-next-line: object-literal-shorthand
    console.log(data);
    return this.http.post<any>(this.ajoutPartenaire, data, { headers: headers});
  }


}
