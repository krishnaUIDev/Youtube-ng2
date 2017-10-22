import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {DataService} from '../services/data.service';
import { Header} from '../header';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  myList: Header[];
  error: string;

  constructor(private http:Http,
              private dataService: DataService,
              private router: Router) {
  }
  ngOnInit() {

   /* this.http.get('../assets/json/list.json')
      .map(response => response.json())
      .subscribe(res => this.myList = res);*/

   //services added
    this.dataService.getAllData()
      .subscribe(res => this.myList = res,
        error=>this.error = error.statusText);
  }

  preventNormal(event:MouseEvent){
    this.router.navigate(['./surya'])

  }

  increse(){
    //let i = 0;
   //document.getElementById("ha").hak = ++i;

  }
}
