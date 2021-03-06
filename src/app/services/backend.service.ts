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

  toDoItems: Array<ToDoItem> = [];
  constructor(private http: HttpClient) { }

  public isLoggedIn(): boolean {
    return (localStorage.getItem('isLoggedIn') == 'true');
  }

/*  --------------------CRUD ITEMS -------------------------------  */  
  getItems(): Observable<Array<ToDoItem>> {
    return this.http.get<Array<ToDoItem>>(this.url + '/items');
  }

  deleteItem(id: number) {
    return this.http.delete<Array<ToDoItem>>(this.url + '/items/' + id);
  }

  addItem(item: ToDoItem) {
    return this.http.post<Array<ToDoItem>>(this.url + '/items', item);
  }

  //todo use this method in the app
  updateItem(id: number, item: ToDoItem) {
    return this.http.put<Array<ToDoItem>>(this.url + '/items/' + id, item);
  }
/*  --------------------------------------------------------------  */  

/*  --------------------CRUD USERS -------------------------------  */  

  getUsers(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>(this.url + '/users ');
  }

  deleteUser(id: number) {
    return this.http.delete<Array<UserModel>>(this.url + '/users/' + id);
  }

  addUser(user: UserModel) {
    return this.http.post<Array<UserModel>>(this.url + '/users', user);
  }

  updateUser(id: number, user: UserModel) {
    return this.http.put<Array<ToDoItem>>(this.url + '/users/' + id, user);
  }

  /*  --------------------------------------------------------------  */  


}
