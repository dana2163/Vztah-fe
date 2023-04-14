import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-class-list',
  templateUrl: './teacher-class-list.component.html',
  styleUrls: ['./teacher-class-list.component.scss']
})
export class TeacherClassListComponent {
  classes = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'Science' },
  ];
}
