import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { ShowTechComponent } from './technology/show-tech/show-tech.component';
import { AddEditTechComponent } from './technology/add-edit-tech/add-edit-tech.component';
import {SharedService} from "./shared.service";

import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    ShowTechComponent,
    AddEditTechComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
