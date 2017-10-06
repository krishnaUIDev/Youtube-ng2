import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //list:any[];
  myList: Array<any>;

  constructor(private _http:Http, ) {

    this._http.get('../assets/json/list.json')
      .map(response => response.json())
      .subscribe(res => this.myList = res);


  }


  ngOnInit() {
  }

}
