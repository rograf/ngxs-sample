import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor() { }

  query(){
    console.log('[GET LOGS]')
    return of({
      logs: [
        {id: '1', ip: '192.168.1.1', date: new Date().getTime() - 50 * 60 * 1000, name: '[LOGIN]', user: 'Admin'},
        {id: '2', ip: '192.168.1.1', date: new Date().getTime() - 45 * 60 * 1000, name: '[LOGOUT]', user: 'Admin'},
        {id: '3', ip: '192.168.1.1', date: new Date().getTime() - 42 * 60 * 1000, name: '[CREATE USER]', user: 'Admin'},
        {id: '4', ip: '192.168.1.2', date: new Date().getTime() - 41 * 60 * 1000, name: '[LOGIN]', user: 'John'},
        {id: '5', ip: '192.168.1.2', date: new Date().getTime() - 20 * 60 * 1000, name: '[LOGOUT]', user: 'John'},
        {id: '6', ip: '192.168.1.1', date: new Date().getTime() - 19 * 60 * 1000, name: '[GET USER INFO]', user: 'Admin'},
        {id: '7', ip: '192.168.1.1', date: new Date().getTime() - 18 * 60 * 1000, name: '[REMOVE USER]', user: 'Admin'},
        {id: '8', ip: '192.168.1.1', date: new Date().getTime() - 18 * 60 * 1000, name: '[CHANGE ROLE]', user: 'Admin'},
        {id: '9', ip: '192.168.1.2', date: new Date().getTime() - 12 * 60 * 1000, name: '[LOGIN]', user: 'John'},
        {id: '10', ip: '192.168.1.1', date: new Date().getTime() - 5 * 60 * 1000, name: '[GET USER INFO]', user: 'Admin'},
        {id: '11', ip: '192.168.1.1', date: new Date().getTime() - 4 * 60 * 1000, name: '[REMOVE USER]', user: 'Admin'},
        {id: '12', ip: '192.168.1.5', date: new Date().getTime() - 2 * 60 * 1000, name: '[LOGOUT]', user: 'Admin'},
      ]
    })
  }

}
