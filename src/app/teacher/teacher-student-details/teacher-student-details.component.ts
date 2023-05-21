import { Component, Input } from '@angular/core';
import {Student} from "../../model/student.model";
import {TeacherService} from "../service/teacher.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-teacher-student-details',
  templateUrl: './teacher-student-details.component.html',
  styleUrls: ['./teacher-student-details.component.scss']
})
export class TeacherStudentDetailsComponent {
  @Input() classId!: number;
  @Input() students!: Student[]; // Add the definite assignment assertion '!' after the property name

  constructor() { }


}
