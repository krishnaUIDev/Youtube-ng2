import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getAllData() {
    return this.http.get('../assets/json/list.json')
      .map(response => response.json());
  }

}
