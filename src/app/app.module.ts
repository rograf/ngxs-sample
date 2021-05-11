import { AuthState } from 'src/app/_store/state/auth.state';
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
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LogsModule,
    LoginModule,
    NgxsModule.forRoot([LogsState, AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    NgxsRouterPluginModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
