import { Component, computed, inject, Injector, input, OnInit } from '@angular/core';

import { BackButton } from '../../components/back-button/back-button';
import { EcommerceStore } from '../../ecommerce-store';
import { ProductInfo } from './product-info/product-info';
import { ViewReviews } from './view-reviews/view-reviews';

@Component({
  selector: 'app-view-product-detail',
  imports: [BackButton, ProductInfo, ViewReviews],
  templateUrl: './view-product-detail.html',
  styles: ``,
})
export default class ViewProductDetail implements OnInit {
  readonly injector = inject(Injector);
  readonly store = inject(EcommerceStore);

  productId = input.required<string>();

  backRoute = computed(() => `/products/${this.store.category()}`);

  constructor() {
    this.store.setProductSeoTags(this.store.selectedProduct);
  }

  ngOnInit() {
    this.store.setProductId(this.productId(), { injector: this.injector });
  }
}
