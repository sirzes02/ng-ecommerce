import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sampleUserReviews } from '../../../models/user-review';
import { ViewReviewItem } from './view-review-item';

describe('ViewReviewItem', () => {
  let component: ViewReviewItem;
  let fixture: ComponentFixture<ViewReviewItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReviewItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewReviewItem);
    fixture.componentRef.setInput('review', sampleUserReviews[0]);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
