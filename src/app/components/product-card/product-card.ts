import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
  addToCartClicked = output<Product>();

  get priceDisplay(): string {
    return this.product().price.toFixed(2);
  }

  addToCart(): void {}
}
