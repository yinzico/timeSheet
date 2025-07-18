import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from '../_core/services/student-service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { FacadeService } from '../_core/services/facade-service/facade.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'time-sheet';
  private facadeService = inject(FacadeService)
  ngOnInit(): void {
    this.facadeService.getStudentSchedules("123456");
    this.facadeService.getCurrentClassForStudent()
    this.facadeService.getAllClassesForStudent()
    // this.facadeService.studentCurrent$.subscribe(res => {
    //   console.log(res)
    // })
  }
}
