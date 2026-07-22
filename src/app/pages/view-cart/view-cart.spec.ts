import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import ViewCart from './view-cart';

describe('ViewCart', () => {
  let component: ViewCart;
  let fixture: ComponentFixture<ViewCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCart],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
