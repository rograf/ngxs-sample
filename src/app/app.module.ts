import { LogsState } from './_store/state/log.state';
import { environment } from './../environments/environment.prod';
import { CoreModule } from './_core/core.module';
import { LoginModule } from './login/login.module';
import { LogsModule } from './logs/logs.module';
import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LogsModule,
    LoginModule,
    NgxsModule.forRoot([LogsState], {
      developmentMode: !environment.production
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
