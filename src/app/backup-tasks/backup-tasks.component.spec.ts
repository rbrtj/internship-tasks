import {TestBed, waitForAsync, ComponentFixture} from '@angular/core/testing';
import { BackupTasksComponent } from './backup-tasks.component';
import { BackupUsersService } from '../backup-users.service';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';

let mockUsers = [
    {
        name: 'test',
        age: 12,
        adult: false
    }
];

class MockBackupUsersService {
    getBackupUsers(){
        return new Observable((observer: Observer<Array<any>>) => {
            observer.next(mockUsers);
        });
    }
}

let fixture: ComponentFixture<BackupTasksComponent>;
let component: BackupTasksComponent;
describe('BackupTasksComponent', ()=>{
    beforeEach(waitForAsync(() =>{
        TestBed.configureTestingModule({
            imports: [MatDialogModule],
            declarations: [BackupTasksComponent],
            providers: [
                {provide: BackupUsersService, useClass: MockBackupUsersService}
            ]
        })
        TestBed.compileComponents().then(()=>{
            fixture = TestBed.createComponent(BackupTasksComponent);
            component = fixture.debugElement.componentInstance;
            fixture.detectChanges();
        })
    }))
        it('Should make a call to a service to getBackupUsers', ()=>{
            spyOn(component, 'getBackupUsers').and.callThrough();
    
            component.getBackupUsers();
    
            expect(component.getBackupUsers).toHaveBeenCalled();
        })
    
        it('Should set a name property after fetching data', waitForAsync(()=>{
            component.getBackupUsers();

            fixture.whenStable().then(()=>{
                expect(component.users).toEqual(mockUsers);
            })
        }))

})

