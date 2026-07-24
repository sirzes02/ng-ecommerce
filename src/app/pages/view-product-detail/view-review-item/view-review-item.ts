import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { StarRating } from '../../../components/star-rating/star-rating';
import { ViewPanel } from '../../../directives/view-panel';
import { UserReview } from '../../../models/user-review';

@Component({
  selector: 'app-view-review-item',
  imports: [ViewPanel, StarRating, DatePipe],
  templateUrl: './view-review-item.html',
  styles: ``,
})
export class ViewReviewItem {
  review = input.required<UserReview>();
}
