import { Component, OnInit } from '@angular/core';
import { BackupUsersService } from '../backup-users.service';
import { CheckboxDataService } from '../checkbox-data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isExpanded = false;
  isExpandedRight = false;

  isShowing = false;

  users: any[] = [];
  selectedUsers: any[] = [];
  
  databaseArray = [{
    name: 'MSQL Server'
  },
  {name: 'Customers_db'
  }];

  constructor(private checkboxDataService: CheckboxDataService, private backupUsersService: BackupUsersService) { }

  ngOnInit(): void {
    this.getBackupUsers();
    this.checkboxDataService.selectedUsersObservable().subscribe(selectedUsers =>{
      this.selectedUsers = selectedUsers;
    })
  }
  
  getBackupUsers(){
    this.backupUsersService.getBackupUsers().subscribe(users => {
      this.users = users;
      })
  }

  isDatabaseCheck(): boolean{
    return this.selectedUsers.some(item => item.devIcon.includes('storage'));
  }

}
