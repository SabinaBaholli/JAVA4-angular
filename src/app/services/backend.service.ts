import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  public isLoggedIn = false;
  constructor() { }
}
