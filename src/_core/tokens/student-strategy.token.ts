// tokens/student-strategy.token.ts
import { InjectionToken } from '@angular/core';
import { StudentStrategy } from '../strategies/student-strategy.interface';

export const STUDENT_STRATEGY = new InjectionToken<StudentStrategy>('StudentStrategy');
