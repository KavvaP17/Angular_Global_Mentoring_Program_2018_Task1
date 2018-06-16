import { Component, OnInit } from '@angular/core';

import { Course } from '../../../courses/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course: Course;

  constructor() { }

  ngOnInit() {
    this.course = new Course(1, 'course', Date.now(), 100, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the`);
  }

}
