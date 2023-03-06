import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  getPeopleList():Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
  }
}
