import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}

  success(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'end',
      panelClass: ['snackbar-success']
    });
  }

  error(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'end',
      panelClass: ['snackbar-error']
    });
  }
}
