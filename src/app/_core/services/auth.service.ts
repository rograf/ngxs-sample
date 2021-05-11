import { of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(form) {
    if(form.username === 'sysadmin' && form.password === 'sysadmin'){
      return of({ token: 'x', payload: {username: form.name} });
    } else {
      return throwError({}); 
    }
  }

  logout(token) {
    return of({});
  }
}
