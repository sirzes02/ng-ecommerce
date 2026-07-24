import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { QtySelector } from '../../../components/qty-selector/qty-selector';
import { ToggleWishlistButton } from '../../../components/toggle-wishlist-button/toggle-wishlist-button';
import { EcommerceStore } from '../../../ecommerce-store';
import { Product } from '../../../models/product';
import { StockStatus } from '../stock-status/stock-status';

@Component({
  selector: 'app-product-info',
  imports: [
    TitleCasePipe,
    CurrencyPipe,
    StockStatus,
    QtySelector,
    MatButton,
    MatIcon,
    ToggleWishlistButton,
    MatIconButton,
  ],
  templateUrl: './product-info.html',
  styles: ``,
})
export class ProductInfo {
  readonly store = inject(EcommerceStore);

  product = input.required<Product>();
  quantity = signal(1);
}
