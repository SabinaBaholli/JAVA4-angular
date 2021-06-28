import { Injectable } from '@angular/core';
import { UserModel } from '../models/User.model';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  feedbackMessage = '';
  constructor(private beService: BackendService) { 
  }

  addUser(user: UserModel) {
    this.beService.addUser(user).subscribe(
        // success case
        ()=> { alert('User added')},
        // error case
        ()=> { alert('There was an error')});
  }
}
