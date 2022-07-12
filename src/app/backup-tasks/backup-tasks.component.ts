import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectionListChange } from '@angular/material/list';
import { BackupUsersService } from '../backup-users.service';

@Component({
  selector: 'app-backup-tasks',
  templateUrl: './backup-tasks.component.html',
  styleUrls: ['./backup-tasks.component.scss']
})

export class BackupTasksComponent implements OnInit {

  
  constructor(private backupUsersService: BackupUsersService) {
  }
  
  users: any[];
  
  selected3 = [];
  
  ngOnInit(): void {
    this.getBackupUsers();
  }

  getBackupUsers(){
    this.backupUsersService.getBackupUsers().subscribe(users => {
    users? this.hideLoader(): '';
    this.users = users;
    })
  }

  hideLoader(){
    document.getElementById('loading').style.display = 'none'
  }

  reloadComponent(){
    window.location.reload();
  }
  
  //CHECKBOX
  toggle(item, event: MatCheckboxChange){
    if(event.checked){
      this.selected3.push(item);
    } else {
      const index = this.selected3.indexOf(item);
      if(index >= 0){
        this.selected3.splice(index, 1);
      }
    }
  }

  exists(item){
    return this.selected3.indexOf(item) > -1;
  }

  isIndeterminate(){
    return (this.selected3.length > 0 && !this.isChecked());
  }

  isChecked(){
    return this.selected3.length === this.users.length;
  }

  toggleAll(event: MatCheckboxChange){
    if (event.checked){
      this.users.forEach(row=> {
        this.selected3.push(row);
      })
    } else {
      this.selected3.length = 0;
    }
  }

}
