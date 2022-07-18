import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackupUsersService } from '../backup-users.service';
import { CheckboxDataService } from '../checkbox-data.service';
import { DialogService } from '../dialog.service';
import { MainActionsService } from '../main-actions.service';
@Component({
  selector: 'app-backup-tasks',
  templateUrl: './backup-tasks.component.html',
  styleUrls: ['./backup-tasks.component.scss']
})

export class BackupTasksComponent implements OnInit, OnDestroy {
  
  constructor(private backupUsersService: BackupUsersService, private checkboxDataService: CheckboxDataService,
    private mainActionsService: MainActionsService, private dialogService: DialogService) {
  }
  
  users: any[] = [];

  isLoading = true;
  
  selectedUsers: any[] = [];

  backupUsersSubscription!: Subscription;
  selectedUsersSubscription!: Subscription;

  ngOnInit() {
    this.getBackupUsers();
    this.getSelectedUsers();
  }

  ngOnDestroy() {
    this.backupUsersSubscription.unsubscribe();
    this.selectedUsersSubscription.unsubscribe();
  }

  getBackupUsers() {
   this.backupUsersSubscription =  this.backupUsersService.getBackupUsers().subscribe(users => {
      this.users = users;
      this.isLoading = false;
      })
  }

  getSelectedUsers() {
    this.selectedUsersSubscription = this.checkboxDataService.selectedUsersObservable().subscribe(selectedUsers =>{
      this.selectedUsers = selectedUsers;
    })
  }

  getCheckboxData() {
    return this.checkboxDataService;
  }

  actionsService() {
    return this.mainActionsService;
  }

  openDialog() {
    this.selectedUsers.length > 0 ? this.dialogService.confirmDialog() : alert('Wybierz przynajmniej jedno zadanie!');
  }

  openNotificationsDialog(){
    this.selectedUsers.length > 0 ? this.dialogService.openNotificationsDialog() : alert('Wybierz przynajmniej jedno zadanie!');
  }

}
