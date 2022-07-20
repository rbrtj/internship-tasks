import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BackupTasksComponent} from './backup-tasks.component';
import  {BackupUsersService} from '../backup-users.service';
import { of, delay } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';

describe('BackupUsersService',()=>{
    const fakeUsers = [];
    let component: BackupTasksComponent;
    let fixture: ComponentFixture<BackupTasksComponent>;
    let fakeBackupUsersService: BackupUsersService;

    beforeEach(waitForAsync(() =>{
        fakeBackupUsersService = jasmine.createSpyObj<BackupUsersService>(
            'BackupUsersService',
            {
                getBackupUsers: of(fakeUsers)
            }
        )
          TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                MatDialogModule
            ],
            declarations: [
                BackupTasksComponent
            ],
            providers: [
               {provide: BackupUsersService, useValue: fakeBackupUsersService } 
            ]
        }).compileComponents();

    fixture = TestBed.createComponent(BackupTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    }));

    it('Fetches an array of users', ()=>{
        expect(fakeBackupUsersService.getBackupUsers).toHaveBeenCalled();
    })
}); 