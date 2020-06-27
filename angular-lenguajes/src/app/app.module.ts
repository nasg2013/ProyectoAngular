import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ApproveStudentComponent } from './components/approve-student/approve-student.component';
import { RegisterCourseComponent } from './components/register-course/register-course.component';
import { CommentNewComponent } from './components/comment-new/comment-new.component';
import { RequestConsultComponent } from './components/request-consult/request-consult.component';
import { InquirySectionComponent } from './components/inquiry-section/inquiry-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    ApproveStudentComponent,
    RegisterCourseComponent,
    CommentNewComponent,
    RequestConsultComponent,
    InquirySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
