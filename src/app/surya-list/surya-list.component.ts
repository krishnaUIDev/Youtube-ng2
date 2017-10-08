import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Http} from '@angular/http';
import { Header} from '../header';

@Component({
  selector: 'app-surya-list',
  templateUrl: './surya-list.component.html',
  styleUrls: ['./surya-list.component.css']
})
export class SuryaListComponent implements OnInit {
list: Header[];
error: string;

  constructor(private http:Http, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllData()
      .subscribe(res => this.list = res,
        error=>this.error = error.statusText);
  }

}
