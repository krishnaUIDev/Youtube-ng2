import { Component, OnInit } from '@angular/core';
//import {DataService} from '../services/data.service';
import {Http} from '@angular/http';
//import { Header} from '../header';
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-surya-list',
  templateUrl: './surya-list.component.html',
  styleUrls: ['./surya-list.component.css']
})
export class SuryaListComponent implements OnInit {
list:any[];
error: string;
  video:string;

  constructor(private _http:Http, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this._http.get('../assets/json/songs.json')
      .map(res=>res.json())
      .subscribe(response => this.list = response,
        error=>this.error = error.statusText);
  }

  getEmbedUrl(x){
    return 'https://www.youtube.com/embed/' + x.embed
  }

}
