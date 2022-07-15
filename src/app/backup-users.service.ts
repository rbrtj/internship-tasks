import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackupUsersService {
  
  private usersApi = 'api/backupUsers'

  constructor(private http: HttpClient) {

   }
   getBackupUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.usersApi);
   }

  
  }
