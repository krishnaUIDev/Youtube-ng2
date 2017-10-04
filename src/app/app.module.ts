import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/*material design*/
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import { MdCheckboxModule} from '@angular/material';
import {MdIconRegistry } from '@angular2-material/icon';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MdCardModule,MdButtonModule,MdIconModule,MdCheckboxModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
