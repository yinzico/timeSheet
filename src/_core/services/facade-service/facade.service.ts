import { inject, Injectable } from '@angular/core';
import { StudentService } from '../student-service/student.service';
import { BehaviorSubject, map } from 'rxjs';
import { ICurrentClass } from '../../models/current-class';
import { IClass } from '../../models/class';
import { IStudentSchedule } from '../../models/student-schedule';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  private studentService = inject(StudentService)
  constructor() { }

  getStudentSchedules(id:string){
    this.studentService.getStudentScheduleByStudentId(id)
  }
  
  getCurrentClassForStudent(){
    return this.studentService.studentCurrent$.subscribe((res) => {
      console.log(res)
    })
  }

  getAllClassesForStudent(){
    return this.studentService.classes$.subscribe((res) => {
      console.log(res)
    })
  }
}
