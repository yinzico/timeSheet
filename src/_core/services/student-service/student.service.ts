import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IStudentSchedule } from '../../models/student-schedule';
import { IClass } from '../../models/class';
import { ICurrentClass } from '../../models/current-class';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly apiUrl = 'https://6a05e55c-bab7-4d11-8cfa-f18473cb924d.mock.pstmn.io/student-classes';

  private studentCurrentClassSubject = new BehaviorSubject<ICurrentClass | null>(null);
  private classesSubject = new BehaviorSubject<IClass[]>([]);

  studentCurrent$ = this.studentCurrentClassSubject.asObservable();
  classes$ = this.classesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getStudentScheduleByStudentId(studentId: string): void {
    const sessionID = btoa(`${studentId}_${Date.now()}`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      sessionID
    });

    this.http.post<{ data: IStudentSchedule }>(this.apiUrl, { studentId }, { headers })
      .pipe(map(response => response.data))
      .subscribe(data => {
        const today = new Date().toISOString().split('T')[0];
        const currentClass = data.classes.find(cls => cls.date === today);

        const current: ICurrentClass = {
          name: data.name,
          studentId: data.studentId,
          className: currentClass?.className,
          date: currentClass?.date,
          time: currentClass?.time
        };

        this.studentCurrentClassSubject.next(current);
        this.classesSubject.next(data.classes);
      });
  }
}
