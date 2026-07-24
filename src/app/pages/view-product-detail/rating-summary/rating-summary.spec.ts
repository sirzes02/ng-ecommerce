import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sampleProducts } from '../../../models/product';
import { RatingSummary } from './rating-summary';

describe('RatingSummary', () => {
  let component: RatingSummary;
  let fixture: ComponentFixture<RatingSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingSummary);
    fixture.componentRef.setInput('product', sampleProducts[0]);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
