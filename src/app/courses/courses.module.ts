import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolboxComponent, CourseComponent, CoursesListComponent, CoursesComponent],
  exports: [CoursesComponent]
})
export class CoursesModule { }
