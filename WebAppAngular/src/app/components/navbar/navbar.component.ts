import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  user: any;
  isLogin: boolean;
  message: boolean;

  constructor( private auth: AuthService, private router:Router, private profile: UsersService) {
    this.message = true;
    this.user = new UserModel();
    this.loadProfile();
  }
  ngOnInit(): void {    
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  loadProfile(){
    this.profile.getById(parseInt(localStorage.getItem('token')))
    .subscribe( resp=>{
      this.user=resp;
    });

  }

}
