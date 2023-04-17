import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ParentsChildrenClassesComponent } from './parents/parents-children-classes/parents-children-classes.component';
import {TeacherClassListComponent} from "./teacher/teacher-class-list/teacher-class-list.component";
import {TeacherStudentDetailsComponent} from "./teacher/teacher-student-details/teacher-student-details.component";
import {ClassViewComponent} from "./class-view/class-view.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'teacher-class-list', component: TeacherClassListComponent },
  { path: 'teacher/class/:classId', component: ClassViewComponent },
  { path: 'teacher-student-detail/:classId', component: TeacherStudentDetailsComponent },
  { path: 'parent', component: ParentsChildrenClassesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
