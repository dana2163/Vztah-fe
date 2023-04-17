import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TeacherClassMockService} from "../teacher/teacher-class-mock.service";

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {
  classId!: number;
  classInfo: any;
  students: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private teacherClassMockService: TeacherClassMockService
  ) { }

  ngOnInit(): void {
    this.classId = Number(this.route.snapshot.paramMap.get('classId'));
    this.getClassInfo();
    this.getStudents();
  }

  getClassInfo(): void {
    this.classInfo = this.teacherClassMockService.getClassInfo(this.classId);
  }

  getStudents(): void {
    this.students = this.teacherClassMockService.getStudentsByClassId(this.classId);
  }
}
