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
    const backupUsers = [ {
      name: "Ważne dokumenty",
      status: "11 z 19.44GB (75%)",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "PCNOWAK",
      devIcon: "folder",
      selected: false
},
{
  name: "ftp://192.168.1.7",
      status: "Z powodzeniem",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "PCNOWAK",
      devIcon: "language",
      selected: false
},
{
  name: "Komputer służbowy",
      status: "Z powodzeniem",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "AKALINOWSKA",
      devIcon: "computer",
      selected: false
},
{
  name: "Komputer prywatny",
      status: "Z ostrzeżeniem",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "PCKALINOWSKA",
      devIcon: "computer",
      selected: false
},
{
  name: "MSQL Server",
      status: "Z problemami",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "AKALINOWSKA",
      devIcon: "storage",
      selected: false
},
{
  name: "Customers_db",
      status: "Z powodzeniem",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "PCKALINOWSKA",
      devIcon: "storage",
      selected: false
}]
    return {users, backupUsers};
  }
  constructor() { }
}