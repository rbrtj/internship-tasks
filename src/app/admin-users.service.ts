import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  private usersApi = 'api/adminUsers'
  private usersDetailsApi = 'api/usersDetails'

  constructor(private http: HttpClient) { }

  getAdminUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.usersApi);
  }

  getUsersDetails(): Observable<any[]>{
    return this.http.get<any[]>(this.usersDetailsApi);
  }

}
