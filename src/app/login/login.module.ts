import { LoginRoutingModule } from './login.routing';
import { CoreModule } from './../_core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CoreModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
