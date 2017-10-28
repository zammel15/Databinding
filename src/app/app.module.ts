import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Navbar2Component } from './navbar2.component';


import { ListcvComponent } from './listcv/listcv.component';
import { CvComponent } from './cv-item/cv.component';
import { LescvComponent } from './lescv/lescv.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvsComponent } from './cvs/cvs.component';
import { AppdevComponent } from './appdev/appdev.component';


@NgModule({
  declarations: [
    AppComponent,


    Navbar2Component,


    ListcvComponent,

    CvComponent,

    LescvComponent,

    CvDetailComponent,

    CvsComponent,

    AppdevComponent,




  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
