import { inject, Injectable } from '@angular/core';
import { StudentService } from '../student-service/student.service';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { ICurrentClass } from '../../models/current-class';
import { IClass } from '../../models/class';
import { NotificationService } from '../notification-service/notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  private studentCurrentClassSubject = new BehaviorSubject<ICurrentClass | null>(null);
  private classesSubject = new BehaviorSubject<IClass[]>([]);

  studentCurrent$ = this.studentCurrentClassSubject.asObservable();
  classes$ = this.classesSubject.asObservable();
  private studentService = inject(StudentService)
  private notificationService = inject(NotificationService)
  private router = inject(Router)
  constructor() { }

  getStudentSchedules(id:string){
    this.studentService.getStudentScheduleByStudentId(id).pipe(
      map((response: any) => response.data),
      tap(data => {
         const today = new Date().toISOString().split('T')[0];
        const currentClass = data.classes.find((cls:IClass) => cls.date === today);

        const current: ICurrentClass = {
          name: data.name,
          studentId: data.studentId,
          className: currentClass?.className,
          date: currentClass?.date,
          time: currentClass?.time
        };

        this.studentCurrentClassSubject.next(current);
        this.classesSubject.next(data.classes);
        this.notificationService.success('User data loaded');
      }),
      catchError(err => {
        console.log(err)
        this.notificationService.error('Failed to load user data');
        return of(null);
      })
    ).subscribe();
  }

  getCurrentClassForStudent(){
    return this.studentCurrent$.subscribe((res) => {
      console.log(res)
    })
  }

  getAllClassesForStudent(){
    return this.classes$.subscribe((res) => {
      console.log(res)
    })
  }
}
