import { Component, ElementRef, OnDestroy, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import * as activities from './demo1.activities';

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
  public readonly activity4 = activities.activity4;

  // Store the result of the activities
  public result2: any;
  public result3: any;
  public results = {
    1: false,
    2: false,
    3: false
  }

  public verify(demo) {
    this.results[demo] = !this.results[demo];
  }

}
