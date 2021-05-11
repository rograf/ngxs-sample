import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionDispatched, Store, ofActionSuccessful } from '@ngxs/store';
import { Logout, Login } from './_store/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private store: Store,
  ) {}

  ngOnInit() {
  }

  logout(){
    this.store.dispatch(new Logout())
  }

}
