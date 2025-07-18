import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FacadeService } from '../../../_core/services/facade-service/facade.service';
@Component({
  selector: 'app-student-loggin',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule],
  templateUrl: './student-loggin.component.html',
  styleUrl: './student-loggin.component.scss'
})
export class StudentLogginComponent {
  studentId:string='';
  private facadeService = inject(FacadeService)
  constructor(){}

  onGetStudentIdClick(){
    this.facadeService.getStudentSchedules(this.studentId);
  }
}
