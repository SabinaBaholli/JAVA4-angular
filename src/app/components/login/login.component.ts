import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  time: any;
  errorMessage: string = '';
  constructor(
    private beService: BackendService,
    private router: Router
    ) {
    //first executed
   }

  ngOnInit() {
    this.time = new Date();
  }

  onAddForm(param: any) {
    const user = param.form.value;
    // check if user exists in db
    this.beService.getUsers().subscribe((users) => {
      // sends back array of users found in db with these credentials
      const userExists = users.filter((u) => u.email === user.email && u.password === user.password);
      const isLoggedIn = !!userExists.length;
      if (isLoggedIn) {
        // if user exists, save it in localstorage
        localStorage.setItem('user',JSON.stringify(userExists[0]))
      }
      localStorage.setItem('isLoggedIn', isLoggedIn.toString());
      if ( isLoggedIn) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Wrong credentials!'
      }
    })

  }

  ngOnDestroy() {
    //last executed
    console.log('destroyed')
  }

}
