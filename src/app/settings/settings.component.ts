import { Component, OnInit } from '@angular/core';
import { CapacityPipe } from 'src/capacity.pipe';
import { USER } from '../sample-data/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  user = USER;

  imagePath = `https://www.comarch-cloud.com/profile/v1/avatar/${this.user.userHash}/96`
  constructor(private capacityPipe: CapacityPipe) { }

  ngOnInit(): void {
  }

}