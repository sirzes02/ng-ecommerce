import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sampleProducts } from '../../../models/product';
import { ViewReviews } from './view-reviews';

describe('ViewReviews', () => {
  let component: ViewReviews;
  let fixture: ComponentFixture<ViewReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReviews],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewReviews);
    fixture.componentRef.setInput('product', sampleProducts[0]);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
