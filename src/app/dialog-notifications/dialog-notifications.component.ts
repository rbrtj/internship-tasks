import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-notifications',
  templateUrl: './dialog-notifications.component.html',
  styleUrls: ['./dialog-notifications.component.scss']
})
export class DialogNotificationsComponent implements OnInit {

  selectedValue: number;

  constructor() { }

  ngOnInit(): void {
  }

}
