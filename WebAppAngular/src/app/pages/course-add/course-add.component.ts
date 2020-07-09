import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  courseForm: FormGroup;
  errorMessage: any;
  teachers: any = [];



   constructor(private fb: FormBuilder, private route: ActivatedRoute,
        private rest:CourseService, private router: Router) {
        
          

          this.courseForm = this.fb.group({
            course_id: 0,
            teacher_name: ['', [Validators.required]],
            name: ['', [Validators.required]],
            credit: new FormControl('', [
              Validators.required,
              Validators.pattern('^[0-9]{1,1}$')
            ]),
            description: ['', [Validators.required]],
            schedule: ['', [Validators.required]],
            acronyn: ['', [Validators.required]],
            schedule_consultation: ['', [Validators.required]]
        })

    }


 ngOnInit() {
  this.getTeachers();
  }

  addCourse() {

    if (!this.courseForm.valid) {
      return;
    }

    this.rest.addCourse(this.courseForm.value).subscribe((result) => {
      this.router.navigate(['/course']);
    }, (err) => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['/course']);
  }

  
  getTeachers() {
    this.rest.getAll().subscribe((data: {}) => {
      this.teachers = data;
    });
  }
  
  /*get course_id() { return this.courseForm.get('Course_id'); }*/
  get teacher_name() { return this.courseForm.get('teacher_name'); }
  get name() { return this.courseForm.get('name'); }
  get credit() { return this.courseForm.get('credit'); }
  get description() { return this.courseForm.get('description'); }
  get schedule() { return this.courseForm.get('schedule'); }
  get acronyn() { return this.courseForm.get('acronyn'); }
  get schedule_consultation() { return this.courseForm.get('schedule_consultation'); }
}


