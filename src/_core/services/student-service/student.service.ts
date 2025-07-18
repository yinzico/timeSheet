import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudentSchedule } from '../../models/student-schedule';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly apiUrl = 'https://6a05e55c-bab7-4d11-8cfa-f18473cb924d.mock.pstmn.io/student-classes';



  constructor(private http: HttpClient) {}

  getStudentScheduleByStudentId(studentId: string): Observable<IStudentSchedule> {
    const sessionID = btoa(`${studentId}_${Date.now()}`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      sessionID
    });

    return this.http.post< IStudentSchedule >(this.apiUrl, { studentId }, { headers })
  }
}
