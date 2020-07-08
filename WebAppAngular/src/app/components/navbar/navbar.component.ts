import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { UserModel } from '../../models/user.model';
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  user: any;
  isLogin: boolean;
  userId: number;
  cantMessage:number=0;
  inquiries: any = [];

  constructor( private inquiryService: InquiryService,private auth: AuthService, private router:Router, private profile: UsersService) {
    this.user = new UserModel();
    this.loadProfile();
    this.userId = parseInt(localStorage.getItem('token'));
    this.getAllInquiries();
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

  getAllInquiries() {
    this.inquiryService.getAll().subscribe((data: {}) => {
      this.inquiries = data;
      this.inquiries.forEach(inquiry => {
        if(inquiry.teacherid == this.userId){
          this.cantMessage ++;
        }
      });
    });
  }

}
