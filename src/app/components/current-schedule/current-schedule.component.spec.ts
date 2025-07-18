import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentScheduleComponent } from './current-schedule.component';

describe('CurrentScheduleComponent', () => {
  let component: CurrentScheduleComponent;
  let fixture: ComponentFixture<CurrentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
