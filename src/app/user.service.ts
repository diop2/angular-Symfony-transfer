import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private url:string = 'http://localhost:8000/api/employer';


  constructor(private http: HttpClient) { }
}
