import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService] 
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService] 
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuardService] 
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
