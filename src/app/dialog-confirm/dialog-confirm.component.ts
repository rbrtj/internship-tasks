import { Component, OnInit } from '@angular/core';
import { CheckboxDataService } from '../checkbox-data.service';
import { MainActionsService } from '../main-actions.service';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  constructor(private mainActionsService: MainActionsService) { }

  ngOnInit(): void {
  }

  delete(){
    this.mainActionsService.delete();
  }

}
