import { Component, inject, OnInit } from '@angular/core';
import { FacadeService } from '../../../_core/services/facade-service/facade.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { IClass } from '../../../_core/models/class';
@Component({
  selector: 'app-classes-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './classes-list.component.html',
  styleUrl: './classes-list.component.scss'
})
export class ClassesListComponent implements OnInit {
 private facadeService = inject(FacadeService)
 displayedColumns: string[] = ['class', 'date', 'time'];
 dataSource!: MatTableDataSource<IClass>;
 ngOnInit(): void {
  this.getClassesOfStudent();
 }

 getClassesOfStudent(){
  this.facadeService.classes$.subscribe(res => {
    this.dataSource = new MatTableDataSource(res);
  })
 }
}
