import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: UserModel;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService) {
    this.doForm();
    this.user = new UserModel();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.form.invalid){
      return Object.values(this.form.controls).forEach(control=>{
        control.markAllAsTouched();
      });
    }else{

      Swal.fire({
        text: 'Espere por favor..',
        icon: 'info',
        allowOutsideClick: false
      });
  
      this.user.usersId = 0;
      this.user.name = this.form.value.name;
      this.user.lastname = this.form.value.lastname;
      this.user.email = this.form.value.email;
      this.user.password = this.form.value.password;

      this.userService.addTeacher(this.user)
      .subscribe(resp=>{

         if(resp){
           
          Swal.close();
          Swal.fire(
            'Registro exitoso',
            'Tu solicitud está en trámite',
            'success'
          )
          this.router.navigate(['/login']);
        }else{
          Swal.fire({
            text: 'Correo no válido...',
            icon: 'error',
            title: 'Error al registrar'
         });
          
        }
      })
    }
  }

  doForm(){

    this.form = this.fb.group({
      lastname: ['', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,254}')]],
      name:     ['', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,254}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z1234567890]{2,254}')]],
      email:    ['', [Validators.required, Validators.email]]
    });
  }

  get lastnameValid(){
    return this.form.get('lastname').invalid && this.form.get('lastname').touched;
  }
  get nameValid(){
    return this.form.get('name').invalid && this.form.get('name').touched;
  }
  get passwordValid(){
    return this.form.get('password').invalid && this.form.get('password').touched;
  }
  get emailValid(){
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

}
