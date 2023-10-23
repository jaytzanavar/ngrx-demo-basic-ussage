import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counter } from 'src/app/shared/models/Counter';
import { customIncrement } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  constructor(private store: Store<{ counter: counter }>) {}

  counterinput!: number;
  actionType: string = 'add';
  OnIncrement() {
    this.store.dispatch(
      customIncrement({ value: this.counterinput, action: this.actionType })
    );
  }
}
