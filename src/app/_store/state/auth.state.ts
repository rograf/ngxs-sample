import { Router } from '@angular/router';
import { Injectable, Injector } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { AuthService } from "src/app/_core/services/auth.service";
import { AuthStateModel, Login, Logout } from "../actions/auth.action";
import { StateClear, StateResetAll } from 'ngxs-reset-plugin';
import { ActionType, getActionTypeFromInstance, NgxsNextPluginFn, NgxsPlugin, Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    username: null
  }
})
@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  constructor(private authService: AuthService, private injector: Injector) {}

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    const store = this.injector.get<Store>(Store);
    return this.authService.login(action.payload).pipe(
      tap((result: { token: string }) => {
        ctx.patchState({
          token: result.token,
          username: action.payload.username
        });
        store.dispatch(new Navigate(['/']));
      })
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    const state = ctx.getState();
    const store = this.injector.get<Store>(Store);
    return this.authService.logout(state.token).pipe(
      tap(() => {
        ctx.setState({
          token: null,
          username: null
        });
        store.dispatch(new Navigate(['/login']));
      })
    );
  }
}