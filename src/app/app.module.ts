import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedComponent } from './shared/shared.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }