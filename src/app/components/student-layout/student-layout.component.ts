import { Component} from '@angular/core';
import { CurrentScheduleComponent } from '../current-schedule/current-schedule.component';
import { ClassesListComponent } from '../classes-list/classes-list.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [CurrentScheduleComponent,ClassesListComponent,MatCardModule],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.scss'
})
export class StudentLayoutComponent {

}
