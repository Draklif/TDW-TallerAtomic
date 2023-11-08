import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: any;
  @Output() register = new EventEmitter<any>();

  onRegister(course: any): void {
    this.register.emit(course);
  }
}
