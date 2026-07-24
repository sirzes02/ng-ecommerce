import { Component, computed, inject, input, OnInit } from '@angular/core';

import { BackButton } from '../../components/back-button/back-button';
import { EcommerceStore } from '../../ecommerce-store';
import { ProductInfo } from './product-info/product-info';

@Component({
  selector: 'app-view-product-detail',
  imports: [BackButton, ProductInfo],
  templateUrl: './view-product-detail.html',
  styles: ``,
})
export default class ViewProductDetail implements OnInit {
  readonly store = inject(EcommerceStore);

  productId = input.required<string>();

  backRoute = computed(() => `/products/${this.store.category()}`);

  ngOnInit() {
    this.store.setProductId(this.productId());
  }
}
