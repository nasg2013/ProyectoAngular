import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses:any = [];

  constructor(public rest:CourseService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {

    this.getCourses();
    
  }

  getCourses() {
    this.courses = [];
    this.rest.getCourses().subscribe((data: {}) => {
      console.log(data);
      this.courses = data;
    });
  }
  
  add() {
    this.router.navigate(['/course-add']);
  }

  /*update() {
    this.router.navigate(['/course-update', this.courses.course_id]);
  }*/
  
  delete(id) {
    this.rest.deleteCourse(id)
      .subscribe(res => {
          this.getCourses();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
