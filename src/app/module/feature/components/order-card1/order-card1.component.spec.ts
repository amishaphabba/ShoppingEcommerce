import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCard1Component } from './order-card1.component';

describe('OrderCard1Component', () => {
  let component: OrderCard1Component;
  let fixture: ComponentFixture<OrderCard1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCard1Component]
    });
    fixture = TestBed.createComponent(OrderCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
