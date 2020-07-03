import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  constructor(private profile: UsersService) { 
    this.user = new UserModel();
    this.loadProfile();
  }

  ngOnInit(): void {
  }

  loadProfile(){
    this.profile.getById(parseInt(localStorage.getItem('token')))
    .subscribe( resp=>{
      this.user=resp;
    });

  }

}
