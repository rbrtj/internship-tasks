import { Component, OnInit } from '@angular/core';
import { BackupUsersService } from '../backup-users.service';

@Component({
  selector: 'app-backup-tasks',
  templateUrl: './backup-tasks.component.html',
  styleUrls: ['./backup-tasks.component.scss']
})

export class BackupTasksComponent implements OnInit {

  constructor(private backupUsersService: BackupUsersService) {}

  users: any[];

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
}
