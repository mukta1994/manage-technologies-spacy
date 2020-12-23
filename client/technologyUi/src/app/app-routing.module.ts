import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TechnologyComponent} from './technology/technology.component';
import {SearchComponent} from './search/search.component';
import {ViewTechComponent} from './technology/view-tech/view-tech.component';


const routes: Routes = [
  {
    path:'technology/:page_num/:rec_per_page',component:TechnologyComponent
  },
  {
    path:'technology',component:TechnologyComponent
  },
  {
    path:'detail/:id',component:ViewTechComponent
  },
  {
    path:'search/:query',component:SearchComponent
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
