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
  
  selected3 = [];
  
  isLoading = true;
  
  ngOnInit(): void {
    this.getBackupUsers();
  }

  getBackupUsers(){
    this.backupUsersService.getBackupUsers().subscribe(users => {
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
