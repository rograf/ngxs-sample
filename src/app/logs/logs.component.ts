import { Log, LogsState } from './../_store/state/log.state';
import { LoadLogs } from './../_store/actions/log.action';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs$ = this.store.select(LogsState.getLogs);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadLogs());
  }

}
