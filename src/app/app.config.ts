import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StudentService } from '../_core/services/student-service/student.service';
import { STUDENT_STRATEGY } from '../_core/tokens/student-strategy.token';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), provideAnimationsAsync(),{
      provide: STUDENT_STRATEGY,
      useClass: StudentService // or LocalMockStrategy for mock without post man
    }]
};
