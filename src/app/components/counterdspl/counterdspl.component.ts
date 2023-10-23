import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdspl',
  templateUrl: './counterdspl.component.html',
  styleUrls: ['./counterdspl.component.scss'],
})
export class CounterdsplComponent {
  counterDisplay: number = 0;
  /**
   *
   */
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {
    console.log('HELLO');
    this.store.select('counter').subscribe((data) => {
      console.log(data);
      this.counterDisplay = data.counter;
    });
  }
}
