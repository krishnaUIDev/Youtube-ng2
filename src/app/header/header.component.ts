import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  list:any[];

  /*title = "Surya S/O Krishnan";
  subtitle = "Surya";
  para = "Suriya plays dual lead roles, with Simran, Sameera Reddy and Divya Spandana. ... It was dubbed and   released in Telugu as Surya s/o Krishnan. The film illustrates the theme of how a father often came across his son's life as a hero.";*/

  constructor() {
   this.list = [
     {title:'Surya S/O Krishnan',subtitle:'Surya',para:'Suriya plays dual lead roles, with Simran, Sameera Reddy and Divya Spandana.It was dubbed and   released in Telugu as Surya s/o Krishnan. The film illustrates the theme of how a father often came across his son\'s life as a hero.'},
     {title:'Orange',subtitle:'Ramcharan',para:'A young man falls in love with a girl but has to keep lying to make her happy. Unable to continue, he tells her that it cannot go on and breaks up with her.'},
     {title:'malli malli Idiraniroju',subtitle:'shrwanand',para:'A runner falls in love with a young Muslim woman.'},
     {title:'Andala Rakshasi',subtitle:'Ram',para:'The force of love sets three people (Naveen Chandra, Rahul Ravindran, Lavanya Tripathi) in motion.'},
     ];

  }

  ngOnInit() {
  }

}
