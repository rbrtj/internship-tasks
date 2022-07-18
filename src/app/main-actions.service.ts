import { Injectable } from '@angular/core';
import { CheckboxDataService } from './checkbox-data.service';

@Injectable({
  providedIn: 'root'
})
export class MainActionsService {


  fileIds: [] = [];
  dbIds: [] = [];
  selectedUsers: any[] = [];

  constructor(private checkboxDataService: CheckboxDataService) {
    this.getSelectedUsers();
   }

  getSelectedUsers(){
    this.checkboxDataService.selectedUsersObservable().subscribe(selectedUsers =>{
      this.selectedUsers = selectedUsers;
    })
  }


  delete(){
    for(let i = 0; i < this.selectedUsers.length; i ++){
      if(this.selectedUsers[i].hasOwnProperty('_dbId')){
        console.log('Selected action: delete, dbId: ' + this.selectedUsers[i]._dbId)
      }else if (this.selectedUsers[i].hasOwnProperty('_id')) {
        console.log('Selected action: delete, id: ' + this.selectedUsers[i]._id);
      }else if (this.selectedUsers[i].hasOwnProperty('_fileId')){
        console.log('Selected action: delete, fileId: ' + this.selectedUsers[i]._fileId)
      }
    }
    this.checkboxDataService.refresh();
  }

  backup(){
    for(let i = 0; i < this.selectedUsers.length; i ++){
      if(this.selectedUsers[i].hasOwnProperty('_dbId')){
        console.log('Selected action: backup, dbId: ' + this.selectedUsers[i]._dbId)
      }else if (this.selectedUsers[i].hasOwnProperty('_id')) {
        console.log('Selected action: backup, id: ' + this.selectedUsers[i]._id);
      }else if (this.selectedUsers[i].hasOwnProperty('_fileId')){
        console.log('Selected action: backup, fileId: ' + this.selectedUsers[i]._fileId)
      }
    }
  }

}
