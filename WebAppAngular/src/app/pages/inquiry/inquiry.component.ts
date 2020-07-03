import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InquiryService } from '../../services/inquiry.service';
import { UsersService } from '../../services/users.service';
import { InquiryResponseService } from '../../services/inquiry-response.service';
import { InquiryResponseModel } from '../../models/InquiryResponse.model';
import { InquiryModel } from '../../models/Inquiry.model';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  form: FormGroup;
  inquiry: InquiryModel;
  inquiries: any = [];
  inquiriesResponse: any = [];
  teachers: any = [];
  userId: number;

  constructor( 
    private teacherService: UsersService, 
    private inquiryService: InquiryService, 
    private fb: FormBuilder,
    private router: Router,
    private inquiryResponseService: InquiryResponseService
     ) { 

    this.inquiries = new Array<InquiryModel>();
    this.inquiriesResponse = new Array<InquiryResponseModel>();
    this.inquiry = new InquiryModel();
    this.doForm();
    this.getAllInquiries();
    this.getTeachers();
    this.getAllInquiriesResponse();
    this.userId = parseInt(localStorage.getItem('token'));
  }

  ngOnInit(): void {
  }

  
  getTeachers() {
    this.teacherService.getAll().subscribe((data: {}) => {
      this.teachers = data;
    });
  }

  getAllInquiries() {
    this.inquiryService.getAll().subscribe((data: {}) => {
      this.inquiries = data;
      console.log(this.inquiries);
    });
  }

  getAllInquiriesResponse() {
    this.inquiryResponseService.getAll().subscribe((data: {}) => {
      this.inquiriesResponse = data;
      console.log(this.inquiriesResponse);
    });
  }
  

  loadData(){
    this.form.reset({
      teacher: '-1',
      content: ''
    })
  }
  get teacherValid(){
    return this.form.get('teacher').invalid && this.form.get('teacher').touched;
  }
  get contentValid(){
    return this.form.get('content').invalid && this.form.get('content').touched;
  }
  doForm(){

    this.form = this.fb.group({
      
      teacher: ['-1', [Validators.required, Validators.min(1)]],
      content: ['', [Validators.required]]
    });
  }
  save(){
    console.log(this.form);

    if (this.form.invalid){
      return Object.values(this.form.controls).forEach(control=>{
        control.markAllAsTouched();
      });
    }else{

      this.inquiry.inquiryId = 0;
      this.inquiry.type = 'Private';
      this.inquiry.content = this.form.value.content;
      this.inquiry.creationusersid = this.userId;
      this.inquiry.teacherid = this.form.value.teacher;


    this.inquiryService.addInquiry(this.inquiry).subscribe((result) => {
      this.loadData();
      this.getAllInquiries();
      this.router.navigate(['/inquiry']);
    }, (err) => {
      console.log(err);
    });
    
    }
  }

}
