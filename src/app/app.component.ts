import { Component } from '@angular/core';
import { BackendService } from './services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  showFiller = false;

  constructor(
    public beService: BackendService,
    private router: Router
    ) { 
  }

  hasSignUpUrl() {
    return location.pathname === '/signup';
  }

  logOut() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}


