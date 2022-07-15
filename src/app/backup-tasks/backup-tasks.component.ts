import { Component, OnInit, ViewChild } from '@angular/core';
import { BackupUsersService } from '../backup-users.service';
import { CheckboxDataService } from '../checkbox-data.service';
@Component({
  selector: 'app-backup-tasks',
  templateUrl: './backup-tasks.component.html',
  styleUrls: ['./backup-tasks.component.scss']
})

export class BackupTasksComponent implements OnInit {
  
  constructor(private backupUsersService: BackupUsersService, private checkboxDataService: CheckboxDataService) {
  }
  
  users: any[] = [];

  isLoading = true;
  
  ngOnInit(): void {
    this.getBackupUsers();
  }


  getBackupUsers(){
    this.backupUsersService.getBackupUsers().subscribe(users => {
      this.users = users;
      this.isLoading = false;
      })
  }

  getCheckboxData(){
    return this.checkboxDataService;
  }
}
