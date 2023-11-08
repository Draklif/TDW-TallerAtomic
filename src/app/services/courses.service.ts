import { Injectable } from '@angular/core';
import { Course } from 'src/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [
    { id: 1, title: 'Taller de HTML', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Taller de CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'Taller de JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 4, title: 'Metodologías CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, title: 'Frameworks Frontend', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 6, title: 'Atomic Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  constructor() {}

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
