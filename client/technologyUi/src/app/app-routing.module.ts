import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TechnologyComponent} from './technology/technology.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  {
    path:'technology',component:TechnologyComponent
  },
  {
    path:'search',component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
