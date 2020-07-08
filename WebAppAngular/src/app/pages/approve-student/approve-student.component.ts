import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { UserRoleModel } from '../../models/user-role.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approve-student',
  templateUrl: './approve-student.component.html',
  styleUrls: ['./approve-student.component.css']
})
export class ApproveStudentComponent implements OnInit {

  users: any = [];
  userRole: any;
  constructor( private usersService: UsersService) { 

    this.users = new Array<UserModel>();
    this.getNewsUsers();
    this.userRole = new UserRoleModel();
  }

  ngOnInit(): void {
  }

  getNewsUsers(){
    this.usersService.getNewUsers().subscribe((data: {}) => {
      this.users = data;
    });
      
  }

  disapprove(usersId){
    
    Swal.fire({
      title: '¿Esta seguro?',
      text: "Se va ha rechasar el estudiante",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, rechazar!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Rechazar',
          'Estudiante rechazado',
          'warning'
        )
       
        this.usersService.delete(usersId)
        .subscribe(resp=>{
          console.log(resp);
          this.getNewsUsers();
        })
      }
    })
    
  }
  approve(usersId){
    
    
    this.userRole.usersid = usersId;
    this.userRole.roleid = 3; //StudentRole = 3

    this.usersService.approveUser(this.userRole)
    .subscribe(resp=>{
      if(resp){

        Swal.fire(
          'Estudiante aprobado',
          'Se le ha asignado el role de Estudiante',
          'success'
        )
        this.getNewsUsers();

      }else{

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡Algo salio mal!',
          footer: '<p>Intentalo otra vez</p>'
        })
        

      }
    });
  }
}
