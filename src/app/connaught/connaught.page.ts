import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connaught',
  templateUrl: './connaught.page.html',
  styleUrls: ['./connaught.page.scss'],
})
export class ConnaughtPage implements OnInit {

  constructor() { }
  counties:string[]=["Galway","Mayo","Sligo","Leithrim","Roscommon"];
  ngOnInit() {
  }

}