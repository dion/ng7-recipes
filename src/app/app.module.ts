import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FilterPipe } from './filters/filter.pipe';

@NgModule({
  declarations: [
    AppComponent
    //FilterPipe
  ],
  imports: [
    BrowserModule,
//    HttpModule,
//    FormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}