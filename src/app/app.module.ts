import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ParentsChildrenClassesComponent } from './parents/parents-children-classes/parents-children-classes.component';
import {CommonModule} from "@angular/common";
import {TeacherClassListComponent} from "./teacher/teacher-class-list/teacher-class-list.component";
import { ClassViewComponent } from './class-view/class-view.component';

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    ParentsChildrenClassesComponent,
    TeacherClassListComponent,
    ClassViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

