import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommentNewModel } from '../../models/comment-new.model';
import { CommentNewService } from '../../services/comment-new.service';
import { CommentNewUserModel } from '../../models/comment-new-user.model';
import { getLocaleDateFormat, NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any=[];
  commentNews: any = [];
  commentNewsUsers: any = [];
  newCommentNewsUsers: any;

  constructor(   
                private router: Router, 
                private authService: AuthService, 
                private profile: UsersService,
                private commentNewService: CommentNewService
     )  { 
    this.users = new Array<UserModel>();
    this.commentNews = new Array<CommentNewModel>();
    this.commentNewsUsers = new Array<CommentNewUserModel>();
    this.newCommentNewsUsers = new CommentNewUserModel();
    this.loadProfile();
    this.getCommentNews();       
    this.getCommentNewsUsers();       
  }

  ngOnInit(): void {
  }

  loadProfile(){
    this.profile.getAll()
    .subscribe( resp=>{
      this.users=resp;    
    });

  }

  getCommentNews(){
    this.commentNewService.getAllCommentNew()
    .subscribe(resp=>{
      this.commentNews = resp;
    })
  }

  getCommentNewsUsers(){
    this.commentNewService.getAllCommentNewUser()
    .subscribe(resp=>{
      this.commentNewsUsers = resp;
    })
  }


  delete(commentNewId){

   Swal.fire({
      title: '¿Esta seguro?',
      text: "Va a darse de baja del sistema",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, darse de baja!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Darse de baja',
          'Baja realizada',
          'warning'
        )
       /*
        this.profile.deleteRole(usersId)
        .subscribe(resp=>{
          this.auth.logout();
          this.router.navigate(['/login']);
        })
        */
      }
    })
  }
  
  comment(form:NgForm){
    
    if(form.valid){
      this.newCommentNewsUsers.CommentNewId = form.value.commentNewUserId;
      this.newCommentNewsUsers.CreationDate = new Date();
      this.newCommentNewsUsers.CreationUserId = this.authService.getUser();
      this.newCommentNewsUsers.Content = form.value.commentNewUserContent;
      console.log(this.newCommentNewsUsers);

      this.commentNewService.addCommnetNewUser(this.newCommentNewsUsers)
      .subscribe(resp=>{
        if(resp){
          Swal.fire(
            'Comentario realizado',
            'Gracias...',
            'success'
          )
          this.loadProfile();
          this.getCommentNews();       
          this.getCommentNewsUsers(); 
        }
      });
    }
        
    
    

    
  }

}
