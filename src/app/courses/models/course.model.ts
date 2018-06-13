import {CourseInterface} from './course.interface';

export class Course implements CourseInterface {
  constructor(
    public id: number,
    public title: string,
    public creation: Date,
    public duration: number,
    public description: string
  ) {}
}
