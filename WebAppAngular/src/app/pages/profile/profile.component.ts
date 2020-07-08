import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserModel;
  form: FormGroup;

  constructor( private router: Router, private auth: AuthService, private profile: UsersService, private fb: FormBuilder) { 
    this.user = new UserModel();
    this.loadProfile();
    this.doForm(); 
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
  
      this.user.name = this.form.value.name;
      this.user.lastname = this.form.value.lastname;

      this.profile.updateuser(this.user)
      .subscribe(resp=>{

         if(resp){
           
          Swal.close();
          Swal.fire(
            'Registro exitoso',
            'Datos actualizados',
            'success'
          )
          this.loadProfile();
        }else{
          Swal.fire({
            text: 'Upps...',
            icon: 'error',
            title: 'Intenta de nuevo'
         });
          
        }
      })
      
    }
  }

  doForm(){
    this.form = this.fb.group({
      lastname: [this.user.lastname, [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,254}')]],
      name:     [this.user.name, [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,254}')]],
      password: [this.user.password],
      email:    [this.user.email]
    });
  }

  loadProfile(){
    this.profile.getById(parseInt(localStorage.getItem('token')))
    .subscribe( resp=>{
      this.user=resp;     
      this.doForm();  
    });

  }

  delete(usersId){
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
        this.profile.deleteRole(usersId)
        .subscribe(resp=>{
          this.auth.logout();
          this.router.navigate(['/login']);
        })
      }
    })
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
