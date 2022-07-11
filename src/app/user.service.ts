import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  private usersUrl = 'api/users';



  constructor(private http: HttpClient) {
   }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
    };
}
