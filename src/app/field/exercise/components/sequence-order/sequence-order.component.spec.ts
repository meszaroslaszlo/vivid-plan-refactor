import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceOrderComponent } from './sequence-order.component';

describe('SequenceOrderComponent', () => {
  let component: SequenceOrderComponent;
  let fixture: ComponentFixture<SequenceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenceOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
