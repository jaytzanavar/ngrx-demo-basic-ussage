import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from 'src/app/shared/models/CounterModel';
import { customIncrement } from 'src/app/shared/store/Counter/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  constructor(private store: Store<{ counter: CounterModel }>) {}

  counterinput!: number;
  actionType: string = 'add';
  OnIncrement() {
    this.store.dispatch(
      customIncrement({ value: this.counterinput, action: this.actionType })
    );
  }
}
