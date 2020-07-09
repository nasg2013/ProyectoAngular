import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { InquiryComponent } from './pages/inquiry/inquiry.component';
import { InquiryResponseComponent } from './pages/inquiry-response/inquiry-response.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ApproveStudentComponent } from './pages/approve-student/approve-student.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseAddComponent } from './pages/course-add/course-add.component';
import { CourseUpdateComponent } from './pages/course-update/course-update.component';
import { AdminGuard } from './guards/admin.guard';
import { TeacherGuard } from './guards/teacher.guard';
import { RequestConsultComponent } from './pages/request-consult/request-consult.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'inquiry', component: InquiryComponent, canActivate:[ AuthGuard] },
  { path: 'inquiry-response', component: InquiryResponseComponent , canActivate:[ AuthGuard , TeacherGuard] },
  { path: 'home', component: HomeComponent, canActivate:[ AuthGuard ] },
  { path: 'approve-student', component: ApproveStudentComponent, canActivate:[ AuthGuard , AdminGuard] },
  { path: 'create-user', component: CreateUserComponent, canActivate:[ AuthGuard, AdminGuard] },
  { path: 'profile', component: ProfileComponent, canActivate:[ AuthGuard] },
  { path: 'course', component: CourseComponent, canActivate:[ AuthGuard, TeacherGuard] },
  { path: 'course-add', component: CourseAddComponent, canActivate:[ AuthGuard, TeacherGuard] },
  { path: 'request-consult', component: RequestConsultComponent, canActivate:[ AuthGuard] },
  { path: 'course-update/:course_id', component: CourseUpdateComponent, canActivate:[ AuthGuard, TeacherGuard] },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
