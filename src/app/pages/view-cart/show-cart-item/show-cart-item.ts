import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { QtySelector } from '../../../components/qty-selector/qty-selector';
import { EcommerceStore } from '../../../ecommerce-store';
import { CartItem } from '../../../models/cart';

@Component({
  selector: 'app-show-cart-item',
  imports: [QtySelector, MatIconButton, MatIcon, CurrencyPipe],
  templateUrl: './show-cart-item.html',
  styles: ``,
})
export class ShowCartItem {
  readonly store = inject(EcommerceStore);

  item = input.required<CartItem>();

  total = computed(() => (this.item().product.price * this.item().quantity).toFixed(2));
}
