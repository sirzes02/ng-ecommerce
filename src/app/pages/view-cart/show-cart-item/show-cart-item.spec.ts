import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sampleProducts } from '../../../models/product';
import { ShowCartItem } from './show-cart-item';

describe('ShowCartItem', () => {
  let component: ShowCartItem;
  let fixture: ComponentFixture<ShowCartItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCartItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowCartItem);
    fixture.componentRef.setInput('item', {
      product: sampleProducts[0],
      quantity: 1,
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
