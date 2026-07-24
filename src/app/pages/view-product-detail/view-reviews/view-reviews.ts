import { Component, computed, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { ViewPanel } from '../../../directives/view-panel';
import { EcommerceStore } from '../../../ecommerce-store';
import { Product } from '../../../models/product';
import { RatingSummary } from '../rating-summary/rating-summary';
import { ViewReviewItem } from '../view-review-item/view-review-item';
import { WriteReview } from '../write-review/write-review';

@Component({
  selector: 'app-view-reviews',
  imports: [ViewPanel, RatingSummary, ViewReviewItem, MatButton, WriteReview],
  templateUrl: './view-reviews.html',
  styles: ``,
})
export class ViewReviews {
  readonly store = inject(EcommerceStore);

  product = input.required<Product>();

  sortedReviews = computed(() =>
    [...this.product().reviews].sort((a, b) => b.reviewDate.getTime() - a.reviewDate.getTime()),
  );
}
