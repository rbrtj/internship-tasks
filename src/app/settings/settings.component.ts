import { Component, OnInit } from '@angular/core';
import { CapacityPipe } from 'src/capacity.pipe';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // Rozwiązanie do poprawy \/
  userHash = "z2zvs009w0"

  imagePath = `https://www.comarch-cloud.com/profile/v1/avatar/${this.userHash}/96`

  users!: User;
  
  constructor(private capacityPipe: CapacityPipe, private userService: UserService) {
   }
    
  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}