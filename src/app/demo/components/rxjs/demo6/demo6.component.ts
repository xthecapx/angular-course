import { Component } from '@angular/core';
import { activity1, activity2, activity3, activity4, activity5, lesson } from './demo6.activities';
import { of, from, throwError, Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo6.component.html',
})
export class Demo6Component {
  public readonly lesson = lesson;
  public readonly activity1 = activity1;
  public readonly activity2 = activity2;
  public readonly activity3 = activity3;
  public readonly activity4 = activity4;
  public readonly activity5 = activity5;

  public result1: any;
  public result2: any;
  public result3: any;
  public result4: any;
  public result5: any;

  /**
   * Solution for Activity 1
   */
  solution1() {
    const r = of(Date.now(), { name: 'Super Dev' })
    let count = 1;
    r.subscribe(result => {
      console.log(count++, result);
      this.result1 = result;
      });
  }

  /**
   * Solution for Activity 2
   */
  solution2() {
    const promise = Promise.resolve({ name: 'Awesome Dev', date: Date.now()})
    const p = from(promise);
    p.subscribe(result => this.result2 = result);
  }

  /**
   * Solution for Activity 3
   */
  solution3() {
    const error = throwError('This is the error message');

    error.subscribe({
      error: (message) => this.result3 = message,
    });
  }

  /**
   * Solution for Activity 4
   */
  solution4() {
    const myObservable = Observable.create(observer => {
      observer.next('Event 1');
      observer.next('Event 2');
      observer.next('Event 3');
      observer.complete('Done Emitting Values')
    });

    myObservable
      .subscribe({
        next: (result) => {
          console.log(result);
          return this.result4 = result
          },
        complete: () => console.log('activity 4 completed'),
      });
  }


  /**
   * Solution for Activity 5
   */
  solution5() {
    EMPTY.subscribe({
      next: (result) => {
        console.log('result: ', result);
        return this.result5 = result;
      },
      complete: () => console.log('complete')
    });
  }

}
