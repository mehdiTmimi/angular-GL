import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  public add(user:User):Observable<User>{
    return this.http.post<User>(this.url,user);
  }
  public list():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}
