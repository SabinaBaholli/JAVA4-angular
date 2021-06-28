import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/User.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserModel = {};
  newPassword;
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString)
      console.log(this.user)
    }
  }

  alertUser() {
    alert('Password updated');
  }
  
  changePassword() {
      const newUser = {
        ...this.user,
        password: this.newPassword
      }
      const userId = this.user.id;
      this.backendService.updateUser(userId, newUser).subscribe(
        (response) => this.alertUser(),
        (error) => alert('Error!')
      )
  }

}
