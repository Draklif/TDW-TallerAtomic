import { Injectable } from '@angular/core';
import { Course } from 'src/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [
    { id: 1, title: 'Curso 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Curso 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'Curso 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  constructor() {}

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
