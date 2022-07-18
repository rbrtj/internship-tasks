import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogNotificationsComponent } from './dialog-notifications/dialog-notifications.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  confirmDialog(){
    this.dialog.open(DialogConfirmComponent);
  }
  openNotificationsDialog(){
    this.dialog.open(DialogNotificationsComponent, {width: '800px'});
  }
}
