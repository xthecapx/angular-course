import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  public logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  public title = 'Angular Workshop';
  public items = [ { label: 'Demos', url: '/demos'} ];

  constructor() { }

  ngOnInit() {
  }

}
