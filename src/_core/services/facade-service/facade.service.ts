import { inject, Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  of,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { ICurrentClass } from '../../models/current-class';
import { IClass } from '../../models/class';
import { NotificationService } from '../notification-service/notification.service';
import { Router } from '@angular/router';
import { StudentRepository } from '../../repositories/student-repository';

@Injectable({
  providedIn: 'root',
})
export class FacadeService implements OnDestroy {
  private studentCurrentClassSubject =
    new BehaviorSubject<ICurrentClass | null>(null);
  private classesSubject = new BehaviorSubject<IClass[]>([]);

  studentCurrent$ = this.studentCurrentClassSubject.asObservable();
  classes$ = this.classesSubject.asObservable();
  private studentRepo = inject(StudentRepository);
  private notificationService = inject(NotificationService);
  private router = inject(Router);
  private destroy$ = new Subject<void>();

  constructor() {}

  getStudentSchedules(id: string) {
    this.studentRepo
      .getStudentSchedules(id)
      .pipe(
        takeUntil(this.destroy$),
        map((response: any) => response.data),
        tap((data) => {
          console.log(data);
          const today = new Date().toISOString().split('T')[0];
          const currentClass = data.classes.find(
            (cls: IClass) =>
              cls.date === today && this.isBeforeOrEqualApiTime(cls.time)
          );

          const current: ICurrentClass = {
            name: data.name,
            studentId: data.studentId,
            className: currentClass?.className,
            date: currentClass?.date,
            time: currentClass?.time,
          };

          this.studentCurrentClassSubject.next(current);
          this.classesSubject.next(data.classes);
          this.notificationService.success('User data loaded');
          this.router.navigateByUrl(`/student-info`);
        }),
        catchError((err) => {
          console.log(err);
          err.status == 404
            ? this.notificationService.error(err.error.message)
            : this.notificationService.error('Failed to load user data');
          return of(null);
        })
      )
      .subscribe();
  }

  isBeforeOrEqualApiTime(apiTime: string): boolean {
    const now = new Date();
    const [apiHourMinute, meridiem] = apiTime.split(' ');
    const [hourStr, minuteStr] = apiHourMinute.split(':');
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    if (meridiem === 'PM' && hour !== 12) hour += 12;
    if (meridiem === 'AM' && hour === 12) hour = 0;

    const apiDate = new Date();
    apiDate.setHours(hour, minute, 0, 0);

    return now <= apiDate;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
