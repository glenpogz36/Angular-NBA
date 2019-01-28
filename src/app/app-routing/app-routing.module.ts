import {NgModule} from '@angualr@core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {route} from './routes'

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declerations:[]

})
export class AppRoutingModule { }
