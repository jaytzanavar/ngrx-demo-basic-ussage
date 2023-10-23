import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterdsplComponent } from './counterdspl.component';

describe('CounterdsplComponent', () => {
  let component: CounterdsplComponent;
  let fixture: ComponentFixture<CounterdsplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterdsplComponent]
    });
    fixture = TestBed.createComponent(CounterdsplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
