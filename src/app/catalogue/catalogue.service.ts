import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host = 'http://localhost:8000/api/listUser';

  constructor(private http: HttpClient) { }
  getAllUser() {
   // return this.http.get(this.host + '/user');
   let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
   return this.http.get<any>(this.host, { headers });
  }

  getRessource(url) {
    return this.http.get(url);
  }
}
