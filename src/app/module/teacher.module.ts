import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherDashboardComponent} from "../teacher/teacher-dashboard/teacher-dashboard.component";
import {TeacherClassListComponent} from "../teacher/teacher-class-list/teacher-class-list.component";
@NgModule({
  declarations: [
    TeacherDashboardComponent,
    TeacherClassListComponent // добавить компонент в declarations
  ],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
