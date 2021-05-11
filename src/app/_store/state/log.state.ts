import { Logout } from './../actions/auth.action';
import { LogsService } from './../../_core/services/logs.service';
import { LoadLogs } from './../actions/log.action';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface Log {
  id: string;
  ip: string;
  date: number;
  name: string;
  user: string;
}

export interface LogsStateModel {
  logs: Log[],
  date: Date,
}

@State<LogsStateModel>({
  name: 'logs',
  defaults: {
    logs: [],
    date: null
  }
})
@Injectable()
export class LogsState {

  constructor(
    private logsService: LogsService,
  ) { }

  @Selector()
  static getLogs(state: LogsStateModel) {
    return state.logs;
  }

  @Action(LoadLogs)
  async loadLogs(ctx: StateContext<LogsStateModel>) {
    const state = ctx.getState();
    if(!state.date){
      state.date = new Date();
      state.logs = (await this.logsService.query().toPromise()).logs
      ctx.setState({...state});
    }
  }

  @Action(Logout)
  async reset(ctx: StateContext<LogsStateModel>) {
    ctx.setState({logs: [], date: null});
  }

}