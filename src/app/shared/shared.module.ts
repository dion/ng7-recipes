import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    // FormsModule,
    // BrowserModule
  ]
})
export class SharedModule {

}