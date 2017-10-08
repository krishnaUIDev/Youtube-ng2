import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,MatMenuModule
,MatTooltipModule,MatSlideToggleModule,MatCardModule,MatGridListModule,MatSidenavModule,MatFormFieldModule,
  MatDialogModule} from "@angular/material";
import {MatIconModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './search.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SuryaListComponent } from './surya-list/surya-list.component';

import {DataService} from './services/data.service';


const appRoute: Routes = [
  {path:'home',component: HeaderComponent},
  {path:'login', component:LoginComponent},
  {path:'surya', component:SuryaListComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPipe,
    SidebarComponent,
    LoginComponent,
    SuryaListComponent,

  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,HttpModule,RouterModule.forRoot(appRoute,{useHash: true}),FormsModule,
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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
