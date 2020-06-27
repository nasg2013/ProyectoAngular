import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ApproveStudentComponent } from './components/approve-student/approve-student.component';
import { CommentNewComponent } from './components/comment-new/comment-new.component';
import { InquirySectionComponent } from './components/inquiry-section/inquiry-section.component';
import { RegisterCourseComponent } from './components/register-course/register-course.component';
import { RequestConsultComponent } from './components/request-consult/request-consult.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'approve',
    component: ApproveStudentComponent,
    canActivate: [AuthGuard]

  },
  {path: 'comment', component: CommentNewComponent},
  {path: 'inquiry', component: InquirySectionComponent},
  {path: 'course', component: RegisterCourseComponent},
  {path: 'consult', component: RequestConsultComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
