import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from '../models/ToDoItem.model';
import { UserModel } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url = 'http://localhost:3000';

  public isLoggedIn = false;
  constructor(private http: HttpClient) { }

  getItems(): Observable<Array<ToDoItem>> {
    return this.http.get<Array<ToDoItem>>(this.url + '/items');
  }

  getUsers(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>(this.url + '/users ');
  }

}
