import { AuthGuard } from './../_core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogsComponent } from './logs.component';

const routes: Routes = [
  {
    path: 'logs',
    component: LogsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule {}
