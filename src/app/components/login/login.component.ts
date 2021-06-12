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
    this.beService.isLoggedIn = true;
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    //last executed
    console.log('destroyed')
  }

}
