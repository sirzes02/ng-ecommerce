import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';

import { ViewPanel } from '../../../directives/view-panel';
import { EcommerceStore } from '../../../ecommerce-store';
import { optionItem } from '../../../models/option-item';
import { AddReviewParams } from '../../../models/user-review';

@Component({
  selector: 'app-write-review',
  imports: [
    ViewPanel,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './write-review.html',
  styles: ``,
  host: {
    class: 'block',
  },
})
export class WriteReview {
  readonly store = inject(EcommerceStore);

  fb = inject(NonNullableFormBuilder);

  ratingOptions = signal<optionItem[]>([
    { label: '5 Stars - Excellent', value: 5 },
    { label: '4 Stars - Good', value: 4 },
    { label: '3 Stars - Average', value: 3 },
    { label: '2 Stars - Poor', value: 2 },
    { label: '1 Star - Terrible', value: 1 },
  ]);

  reviewForm = this.fb.group({
    title: ['', Validators.required],
    comment: ['', Validators.required],
    rating: [5, [Validators.required, Validators.min(0), Validators.max(5)]],
  });

  saveReview() {
    if (!this.reviewForm.valid) {
      this.reviewForm.markAllAsTouched();
      return;
    }

    const { title, comment, rating } = this.reviewForm.value;
    this.store.addReview({ title, comment, rating } as AddReviewParams);
  }
}
