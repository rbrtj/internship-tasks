import { Component, OnDestroy, OnInit } from '@angular/core';
import { CapacityPipe } from 'src/capacity.pipe';
import { UserService } from '../user.service';
import { User } from '../user.interface';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  // Rozwiązanie do poprawy \/
  userHash = "z2zvs009w0"
  
  imagePath = `https://www.comarch-cloud.com/profile/v1/avatar/${this.userHash}/96`
  
  users: User[] = [];

  usersSubscription!: Subscription;

  constructor(private capacityPipe: CapacityPipe, private userService: UserService, private translate: TranslateService) {
  translate.setDefaultLang('pl');
  translate.use('pl');
  }
    
  ngOnInit(): void {
    this.getUsers();
  }
  
  ngOnDestroy(){
  this.usersSubscription.unsubscribe();
  }

  getUsers() {
  this.usersSubscription = this.userService.getUsers().subscribe(users => this.users = users);
    
  }
  
  useLanguage(lang: string){
    this.translate.use(lang);
  }

}