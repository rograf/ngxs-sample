import { AuthDirective } from './directives/auth.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const MODULES = [
  FormsModule,
  RouterModule,
]

const DIRECTIVES = [
  AuthDirective
]

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [
    CommonModule,
    ...MODULES
  ],
   exports: [
    ...MODULES,
    ...DIRECTIVES
   ]
})
export class CoreModule { }
