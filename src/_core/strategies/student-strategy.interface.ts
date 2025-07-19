// strategies/student-api-strategy.interface.ts
import { Observable } from 'rxjs';
import { IStudentSchedule } from '../models/student-schedule';

export interface StudentStrategy {
  getStudentSchedules(id: string): Observable<IStudentSchedule>;
}
