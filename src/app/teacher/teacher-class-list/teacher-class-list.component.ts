import { Component, OnInit } from '@angular/core';
import { TeacherClassMockService } from '../teacher-class-mock.service';
import { Router } from '@angular/router';
import {TeacherService} from "../service/teacher.service";
import {CourseDto} from "../model/teacher.model";

@Component({
  selector: 'app-teacher-class-list',
  templateUrl: './teacher-class-list.component.html',
  styleUrls: ['./teacher-class-list.component.scss']
})
export class TeacherClassListComponent implements OnInit {
  classes: CourseDto[] = [];

  teacherId = 3;      //TODO

  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(): void {
    this.teacherService.getCoursesById(this.teacherId).subscribe(
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
