import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-request-consult',
  templateUrl: './request-consult.component.html',
  styleUrls: ['./request-consult.component.css']
})
export class RequestConsultComponent implements OnInit {

  form: FormGroup;
  courses:any [];
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSumit(){

  }

}
