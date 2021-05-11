import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const MODULES = [
  FormsModule,
  RouterModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ]
})
export class CoreModule { }
