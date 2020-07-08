import { Component, OnInit } from '@angular/core';

import { InquiryResponseModel } from '../../models/InquiryResponse.model';
import { InquiryResponseService } from '../../services/inquiry-response.service';
import { InquiryModel } from '../../models/Inquiry.model';
import { InquiryService } from '../../services/inquiry.service';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-inquiry-response',
  templateUrl: './inquiry-response.component.html',
  styleUrls: ['./inquiry-response.component.css']
})
export class InquiryResponseComponent implements OnInit {

  inquiries: any = [];
  inquiriesResponse: any = [];
  users: any = [];
  inquiryResponse: any;
  userId: number;

  constructor(
              private inquiryResponseService: InquiryResponseService,
              private inquiryService: InquiryService,
              private usersService: UsersService
              ) {
    this.inquiries = new Array<InquiryModel>();
    this.inquiriesResponse = new Array<InquiryResponseModel>();
    this.users = new Array<UserModel>() ;
    this.inquiryResponse = new InquiryResponseModel();
    this.getAllInquiries();
    this.getAllInquiriesResponse();
    this.getAllUsers();
    this.userId = parseInt(localStorage.getItem('token'));
   }

  ngOnInit(): void {
  }  
  
  getAllInquiriesResponse() {
    this.inquiryResponseService.getAll().subscribe((data: {}) => {
      this.inquiriesResponse = data;
    });
  }

  getAllInquiries() {
    this.inquiryService.getAll().subscribe((data: {}) => {
      this.inquiries = data;
    });
  }

  getAllUsers(){
    this.usersService.getAll().subscribe((data: {}) => {
      this.users = data;
    });
  }

 async response(id){

    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      Swal.fire(text);
      this.inquiryResponse.inquiryResponseId = 0;
      this.inquiryResponse.content = text;
      this.inquiryResponse.inquiryid = id;
  
      this.inquiryResponseService.addInquiryResponse(this.inquiryResponse)
      .subscribe(resp=>{

        this.getAllInquiries();
        this.getAllInquiriesResponse();
        this.getAllUsers();
            
      });
    }
  }

  delete(id){
    console.log(id);
  }

}
