import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { InquiryComponent } from './pages/inquiry/inquiry.component';
import { InquiryResponseComponent } from './pages/inquiry-response/inquiry-response.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'inquiry', component: InquiryComponent, canActivate:[ AuthGuard] },
  { path: 'inquiry-response', component: InquiryResponseComponent , canActivate:[ AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate:[ AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
