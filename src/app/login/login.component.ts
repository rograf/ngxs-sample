import { Login, Logout } from './../_store/actions/auth.action';
import { Actions, ofActionErrored, ofActionSuccessful, Store } from '@ngxs/store';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  isShowAlert = false;

  model = {
    username: null,
    password: null
  }

  constructor(
    private store: Store,
    private actions:Actions
  ) {}

  ngOnInit(): void {
    this.actions.pipe(ofActionErrored(Login)).subscribe(() => {
      this.isShowAlert = true;
    });
  }

  onSubmit(){
    this.store.dispatch(new Login(this.model));
  }

  
}
