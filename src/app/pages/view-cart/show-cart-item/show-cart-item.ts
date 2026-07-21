import { Component, computed, inject, input } from '@angular/core';
import { CartItem } from '../../../models/cart';
import { QtySelector } from '../../../components/qty-selector/qty-selector';
import { EcommerceStore } from '../../../ecommerce-store';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';

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
