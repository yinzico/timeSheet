import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentStrategy } from '../strategies/student-strategy.interface';
import { IStudentSchedule } from '../models/student-schedule';
import { STUDENT_STRATEGY } from '../tokens/student-strategy.token';

@Injectable({ providedIn: 'root' })
export class StudentRepository {
  constructor(@Inject(STUDENT_STRATEGY) private strategy: StudentStrategy) {}

  getStudentSchedules(id:string): Observable<IStudentSchedule> {
    return this.strategy.getStudentSchedules(id);
  }


}
