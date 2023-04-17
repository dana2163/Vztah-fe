import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherClassMockService {
  mockClasses = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'Science' },
  ];

  constructor() { }

  getClasses(): Observable<any[]> {
    return of(this.mockClasses);
  }
}
