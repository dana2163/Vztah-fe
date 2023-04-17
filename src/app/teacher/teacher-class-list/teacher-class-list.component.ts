import { Component, OnInit } from '@angular/core';
import { TeacherClassMockService } from '../teacher-class-mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-class-list',
  templateUrl: './teacher-class-list.component.html',
  styleUrls: ['./teacher-class-list.component.scss']
})
export class TeacherClassListComponent implements OnInit {
  classes: any[] = [];

  constructor(private teacherClassMockService: TeacherClassMockService, private router: Router) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(): void {
    this.teacherClassMockService.getClasses().subscribe(
      data => {
        this.classes = data;
      },
      error => {
        console.error('Error fetching classes:', error);
      }
    );
  }

  onClassClick(classId: number): void {
    this.router.navigate(['/teacher/class', classId]);
  }

}
