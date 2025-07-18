import { Component, inject, OnInit } from '@angular/core';
import { FacadeService } from '../../../_core/services/facade-service/facade.service';
import { Router } from '@angular/router';
import { ICurrentClass } from '../../../_core/models/current-class';

@Component({
  selector: 'app-current-schedule',
  standalone: true,
  imports: [],
  templateUrl: './current-schedule.component.html',
  styleUrl: './current-schedule.component.scss'
})
export class CurrentScheduleComponent implements OnInit {
  private facadeService = inject(FacadeService)
  private router = inject(Router)
  studentInfo!:ICurrentClass | null;
  ngOnInit(): void {
    this.getStudentClassInfo()
  }

  getStudentClassInfo(){
    this.facadeService.studentCurrent$.subscribe((res) =>{
      this.studentInfo = res
      this.studentInfo == null ? this.router.navigateByUrl('/loggin') : '';
    });
  }
}
