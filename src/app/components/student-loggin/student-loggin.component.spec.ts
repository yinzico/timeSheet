import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLogginComponent } from './student-loggin.component';

describe('StudentLogginComponent', () => {
  let component: StudentLogginComponent;
  let fixture: ComponentFixture<StudentLogginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLogginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentLogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
