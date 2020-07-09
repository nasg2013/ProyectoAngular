import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {

  @Input() courseData:any = { name:'', description: '', schedule_consultation: '', credit: 0, schedule: '', course_id: 0, teacher_name: '', acronyn: ''};
  
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
    this.rest.getCourse(this.route.snapshot.params['course_id']).subscribe((data: {}) => {
      console.log(data);
      this.courseData = data;
    });
    this.getTeachers();
  }


  updateStudent() {
    if (!this.courseForm.valid) {
      return;
    }
    this.rest.updateCourse(this.courseData).subscribe((result) => {
      this.router.navigate(['/course']);
    }, (err) => {
      console.log(err);
    });
  }


    getTeachers() {
    this.rest.getAll().subscribe((data: {}) => {
      this.teachers = data;
    });
  }

  cancel() {
    this.router.navigate(['/course']);
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
