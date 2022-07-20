import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, combineLatest, map } from 'rxjs';
import { AdminUsersService } from '../admin-users.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminUsers: any[] = [];
  usersDetails: any[] = [];

  adminUsersSubscription!: Subscription;
  usersDetailsSubscription!: Subscription;

  constructor(private adminUsersService: AdminUsersService) {
  }
  
  ngOnInit(): void {
    this.getAdminUsers();
    this.getUsersDetails();
  }

  ngOnDestroy(){
    this.adminUsersSubscription.unsubscribe();
    this.usersDetailsSubscription.unsubscribe();
  }

  getAdminUsers(){
    this.adminUsersSubscription = this.adminUsersService.getAdminUsers().subscribe(adminUsers =>{
    this.adminUsers = adminUsers;
    })
  }

  getUsersDetails(){
    this.usersDetailsSubscription = this.adminUsersService.getUsersDetails().subscribe(usersDetails =>{
      this.usersDetails = usersDetails;
    })
  }

  mergeUsers(){
    this.adminUsers.map(adminUsers => {
    this.usersDetails.find(details => {
      if(details.id === adminUsers._userId){
        adminUsers.username = details.username
      }
    })
   })
  }

}
