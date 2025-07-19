// local-mock.strategy.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStudentSchedule } from '../models/student-schedule';
import { StudentStrategy } from './student-strategy.interface';

@Injectable({providedIn:'root'})
export class LocalMockStrategy implements StudentStrategy {
  private mockData: IStudentSchedule = {
    data:{
      studentId: '123456',
    name: 'Test Lobna',
    classes: [
      {
        className: 'Computer',
        date: '2025-07-19',
        time: '07:00 PM',
      },
      {
        className: 'Math',
        date: '2025-07-20',
        time: '10:00 AM',
      },
      {
        className: 'Physics',
        date: '2025-07-21',
        time: '12:00 PM',
      },
      {
        className: 'Biology',
        date: '2025-07-22',
        time: '08:30 AM',
      },
      {
        className: 'English',
        date: '2025-07-23',
        time: '01:00 PM',
      },
      {
        className: 'Chemistry',
        date: '2025-07-24',
        time: '11:15 AM',
      },
      {
        className: 'Art',
        date: '2025-07-25',
        time: '03:00 PM',
      },
    ],
    }
  };

  getStudentSchedules(id: string): Observable<IStudentSchedule> {
    return of(this.mockData);
  }
}
