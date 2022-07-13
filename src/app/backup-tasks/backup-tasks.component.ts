import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BackupUsersService } from '../backup-users.service';

@Component({
  selector: 'app-backup-tasks',
  templateUrl: './backup-tasks.component.html',
  styleUrls: ['./backup-tasks.component.scss']
})

export class BackupTasksComponent implements OnInit {
  
  // *********
  //  @ViewChild('loading') loading: ElementRef;
  // *********
  
  constructor(private backupUsersService: BackupUsersService) {
  }
  
  users: any[] = [];
  
  selectedUsers = [];
  
  isLoading = true;
  
  ngOnInit(): void {
    this.getBackupUsers();
  }

  getBackupUsers(){
    this.backupUsersService.getBackupUsers().subscribe(users => {
      this.selectedUsers.length = 0;
      this.users = users;
      this.isLoading = false;
      console.log('xd');
      })
  }

  onButtonClick(){
    this.isLoading = true;
    this.getBackupUsers();
  }
  
  //CHECKBOX
  toggle(item, event: MatCheckboxChange){
    if(event.checked){
      this.selectedUsers.push(item);
    } else {
      const index = this.selectedUsers.indexOf(item);
      if(index >= 0){
        this.selectedUsers.splice(index, 1);
      }
    }
  }

  exists(item){
    return this.selectedUsers.indexOf(item) > -1;
  }

  isIndeterminate(){
    return (this.selectedUsers.length > 0 && !this.isChecked());
  }

   isChecked(){
   return this.selectedUsers.length === this.users.length;
  }

  toggleAll(event: MatCheckboxChange){
    if (event.checked){
      this.users.forEach(row=> {
        this.selectedUsers.push(row);
      })
    } else {
      this.selectedUsers.length = 0;
    }
  }

}
