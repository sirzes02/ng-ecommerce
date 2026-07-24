import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { EcommerceStore } from '../../ecommerce-store';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon, CurrencyPipe, RouterLink],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  readonly store = inject(EcommerceStore);

  product = input.required<Product>();

  get inStockDisplay(): string {
    return this.product().inStock ? 'In Stock' : 'Out of Stock';
  }
}
