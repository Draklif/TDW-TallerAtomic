import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/interfaces/course';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService // Inyecta el CourseService aquí
  ) {}

  ngOnInit(): void {
    const courseId = +this.route.snapshot.params['id'];
    this.course = this.coursesService.getCourseById(courseId);
  }

  onRegister(): void {
    
  }
}
