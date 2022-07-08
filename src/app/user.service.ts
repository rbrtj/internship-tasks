import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.interface';
import  Users from '../assets/user.json';
@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor() {
   }

  getUsers(): Observable<User> {
    const users = of(Users);
    return users;
  }
}
