import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PerentsDashboardComponent } from './perents/perents-dashboard/perents-dashboard.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { PerentsChildrenClassesComponent } from './perents/perents-children-classes/perents-children-classes.component';


@NgModule({
  declarations:[
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PerentsDashboardComponent,
    StudentDashboardComponent,
    PerentsChildrenClassesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

