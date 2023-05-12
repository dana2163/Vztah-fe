import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseDto} from "../model/teacher.model";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = 'http://localhost:8080/course';

  constructor(private http: HttpClient) { }

  getCoursesById(teacherId: number): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(this.apiUrl + '/' + teacherId);
  }

}
