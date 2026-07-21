import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon, CurrencyPipe],
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
