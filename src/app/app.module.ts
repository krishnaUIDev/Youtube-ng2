import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,MatMenuModule
,MatTooltipModule,MatSlideToggleModule,MatCardModule,MatGridListModule,MatSidenavModule,MatFormFieldModule,
  MatDialogModule} from "@angular/material";
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './search.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SearchPipe,
    SidebarComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,HttpModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
