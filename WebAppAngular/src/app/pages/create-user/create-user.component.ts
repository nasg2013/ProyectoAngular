import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.doForm();
   }

  ngOnInit(): void {
  }

  onSubmit(){}

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
