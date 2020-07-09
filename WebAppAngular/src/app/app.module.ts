import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InquiryComponent } from './pages/inquiry/inquiry.component';
import { InquiryResponseComponent } from './pages/inquiry-response/inquiry-response.component';
import { HomeComponent } from './pages/home/home.component';
import { ApproveStudentComponent } from './pages/approve-student/approve-student.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseAddComponent } from './pages/course-add/course-add.component';
import { CourseUpdateComponent } from './pages/course-update/course-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    InquiryComponent,
    InquiryResponseComponent,
    HomeComponent,
    ApproveStudentComponent,
    CreateUserComponent,
    CourseComponent,
    CourseAddComponent,
    CourseUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
