import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const users = [
      {
        name: "Jan",
      surname: "Nowakowski",
      email: "jan.nowakowski@comarch.com",
      diskUsage: 10992168731,
      diskCapacity: 32212254720,
      accountNames: {
        pl: "Comarch IBARD EKONOMICZNY",
        fr: "Comarch IBARD ECONOMIQUE",
        de: "Comach IBARD ECONOMIC",
        en: "Comarch IBARD ECONOMIC"
      },
      expirationDate: "2030-03-09T23:00:00.000+0000",
      userHash: "z2zvs009w0"
      }
    ];
    return {users};
  }
  constructor() { }
}