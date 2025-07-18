import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FacadeService } from '../_core/services/facade-service/facade.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule ,MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'time-sheet';
  // private facadeService = inject(FacadeService)
  ngOnInit(): void {
    // this.facadeService.getStudentSchedules("123456");
    // this.facadeService.getCurrentClassForStudent()
    // this.facadeService.getAllClassesForStudent()
  }
}
