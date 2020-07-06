import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-approve-student',
  templateUrl: './approve-student.component.html',
  styleUrls: ['./approve-student.component.css']
})
export class ApproveStudentComponent implements OnInit {

  users: any = [];
  constructor( private usersService: UsersService) { 

    this.users = new Array<UserModel>();
    this.getNewsUsers();
  }

  ngOnInit(): void {
  }

  getNewsUsers(){
    this.usersService.getNewUsers().subscribe((data: {}) => {
      this.users = data;
    });
      
  }

  disapprove(usersId){
    console.log(usersId);
    
  }
  approve(usersId){
    console.log(usersId);
  }

}
