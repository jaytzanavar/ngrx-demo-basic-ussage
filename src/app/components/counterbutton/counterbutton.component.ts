import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss'],
})
export class CounterbuttonComponent {
  /**
   *
   */
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  OnIncrement(): void {
    console.log(this.store);
    console.log(increment());
    this.store.dispatch(increment());
  }
  OnDecrement(): void {
    this.store.dispatch(decrement());
  }
  OnRes(): void {
    this.store.dispatch(reset());
  }
}
