import { Component, ElementRef, OnDestroy, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import * as activities from './demo1.activities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.scss']
})
export class MaterialDemo1Component {
  // Store the info about the activities
  public readonly lesson = activities.lesson;
  public readonly activity1 = activities.activity1;
  public readonly activity2 = activities.activity2;
  public readonly activity3 = activities.activity3;

  constructor(public router: Router) {}

  // Store the result of the activities
  public results = {
    1: false,
    2: false,
    3: [
      "Hit on the button and a new section", 
      "will be visible in the app"
    ]
  }

  public verify(demo) {
    this.results[demo] = !this.results[demo];
    if (demo === 3) {
      this.router.navigate(['/material-nav']);
    }
  }

  public navigate(route: string) {
    this.router.navigate([route]); 
  }

}
