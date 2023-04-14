import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PerentsDashboardComponent} from "./perents/perents-dashboard/perents-dashboard.component";
import {TeacherDashboardComponent} from "./teacher/teacher-dashboard/teacher-dashboard.component";
import {StudentDashboardComponent} from "./student/student-dashboard/student-dashboard.component";
const routes: Routes = [
  {path: 'parents', component: PerentsDashboardComponent},
  {path: 'teachers', component: TeacherDashboardComponent},
  {path: 'students', component: StudentDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
