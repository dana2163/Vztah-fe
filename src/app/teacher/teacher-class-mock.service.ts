// src/app/teacher-class-mock.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {mockData} from "../mock/mock-data";

@Injectable({
  providedIn: 'root',
})
export class TeacherClassMockService {
  constructor() {}

  getClasses(): Observable<any[]> {
    return of(mockData.classes);
  }
  getClassInfo(classId: number): any {
    return mockData.classes.find((classItem) => classItem.id === classId);
  }

  getStudentsByClassId(classId: number): any[] {
    return mockData.students.filter((student) => student.classIds.includes(classId));
  }

}
