import { Injectable } from '@angular/core';
import { BackupUsersService } from './backup-users.service';
import { Observable, of, Subject } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Injectable({
  providedIn: 'root'
})
export class CheckboxDataService {

  users: any[] = [];

  selectedUsers: any[] = [];

  public subject = new Subject<any[]>();

  
  constructor(private backupUsersService: BackupUsersService) { 
    this.getData();
  }
  
  getData(){
    this.backupUsersService.getBackupUsers().subscribe((users => {
      this.users = users;
    }))
  }
  
  // CHECKBOX
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
    return this.selectedUsers.indexOf(item) != -1;
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
    
    selectedUsersObservable(): Observable<any[]>{
      return of(this.selectedUsers);
    }

  }
  