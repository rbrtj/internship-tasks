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
      selected: false,
      _fileId: '1'
},
{
  name: "ftp://192.168.1.7",
      status: "Z powodzeniem",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "PCNOWAK",
      devIcon: "language",
      selected: false,
      _dbId: '1'
},
{
  name: "Komputer służbowy",
      status: "Z powodzeniem",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "AKALINOWSKA",
      devIcon: "computer",
      selected: false,
      _id: '1'
},
{
  name: "Komputer prywatny",
      status: "Z ostrzeżeniem",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "PCKALINOWSKA",
      devIcon: "computer",
      selected: false,
      _id: '2'
},
{
  name: "MSQL Server",
      status: "Z problemami",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "AKALINOWSKA",
      devIcon: "storage",
      selected: false,
      _dbId: '2'
},
{
  name: "Customers_db",
      status: "Z powodzeniem",
      lastBackup: "Dziś, 10:54",
      nextBackup: "13.10.2019",
      device: "PCKALINOWSKA",
      devIcon: "storage",
      selected: false,
      _dbId: '3'
}];
const adminUsers = [
  {
    name: "Ważne dokumenty",
    status: "11 z 19.44GB (75%)",
    lastBackup: "Dziś, 10:54",
    nextBackup: "13.10.2019",
    device: "PCNOWAK",
    devIcon: "folder",
    selected: false,
    _fileId: '1',
    _userId: 1,
},
{
name: "ftp://192.168.1.7",
    status: "Z powodzeniem",
    lastBackup: "Dziś, 10:54",
    nextBackup: "13.10.2019",
    device: "PCNOWAK",
    devIcon: "language",
    selected: false,
    _dbId: '1',
    _userId: 2,

},
{
name: "Komputer służbowy",
    status: "Z powodzeniem",
    lastBackup: "Dziś, 10:54",
    nextBackup: "13.10.2019",
    device: "AKALINOWSKA",
    devIcon: "computer",
    selected: false,
    _id: '1',
    _userId: 3,
},
{
name: "Komputer prywatny",
    status: "Z ostrzeżeniem",
    lastBackup: "Dziś, 10:54",
    nextBackup: "13.10.2019",
    device: "PCKALINOWSKA",
    devIcon: "computer",
    selected: false,
    _id: '2',
    _userId: 4,
},
{
name: "MSQL Server",
    status: "Z problemami",
    lastBackup: "Dziś, 10:54",
    nextBackup: "13.10.2019",
    device: "AKALINOWSKA",
    devIcon: "storage",
    selected: false,
    _dbId: '2',
    _userId: 5,
},
{
name: "Customers_db",
    status: "Z powodzeniem",
    lastBackup: "Dziś, 10:54",
    nextBackup: "13.10.2019",
    device: "PCKALINOWSKA",
    devIcon: "storage",
    selected: false,
    _dbId: '3',
    _userId: 6,
}
];
const usersDetails = [
  {
    id: 1,
    username: 'Adam'
  },
{
  id: 2,
  username: 'Piotr'
},
{
  id: 3,
  username: 'Pawel'
},
{
  id: 4,
  username: 'Kamil'
},
{
  id: 5,
  username: 'Andrzej'
},
{
  id: 6,
  username: 'Patryk'
}
]
    return {users, backupUsers, adminUsers, usersDetails};
  }
  constructor() { }
}