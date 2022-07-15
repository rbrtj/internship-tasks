import { Component, OnInit, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BackupUsersService } from '../backup-users.service';
import { CheckboxDataService } from '../checkbox-data.service';
@Component({
  selector: 'app-backup-tasks',
  templateUrl: './backup-tasks.component.html',
  styleUrls: ['./backup-tasks.component.scss']
})

export class BackupTasksComponent implements OnInit {
  
  // *********
  //  @ViewChild('loading') loading: ElementRef;
  // *********
  
  constructor(private backupUsersService: BackupUsersService, private checkboxDataService: CheckboxDataService) {
  }
  
  users: any[] = [];
  
  selectedUsers: any[] = [];

  isLoading = true;
  
  ngOnInit(): void {
    this.checkboxDataService.selectedUsersObservable().subscribe(selectedUsers =>{
      this.selectedUsers = selectedUsers;
    })
    this.getBackupUsers();
  }

  getBackupUsers(){
    this.backupUsersService.getBackupUsers().subscribe(users => {
      this.users = users;
      this.isLoading = false;
      })
  }

  onButtonClick(){
    this.isLoading = true;
    this.getBackupUsers();
    this.selectedUsers = [];
  }
  
  onButtonClick1(){
    console.log(this.users);
  }

  //CHECKBOX
  getCheckboxData(){
    return this.checkboxDataService;
  }
}
