import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherClassListComponent} from "../teacher/teacher-class-list/teacher-class-list.component";
import {TeacherDashboardComponent} from "../teacher/teacher-dashboard/teacher-dashboard.component";
import {TeacherStudentDetailsComponent} from "../teacher/teacher-student-details/teacher-student-details.component";

@NgModule({
  declarations: [
    TeacherDashboardComponent,
    TeacherClassListComponent,
    TeacherStudentDetailsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TeacherDashboardComponent,
  ],
})
export class TeacherModule { }
