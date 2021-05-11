import { LogsRoutingModule } from './login.routing';
import { CoreModule } from './../_core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsComponent } from './logs.component';


@NgModule({
  declarations: [
    LogsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LogsRoutingModule
  ]
})
export class LogsModule { }
