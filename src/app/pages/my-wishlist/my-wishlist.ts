import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { BackButton } from '../../components/back-button/back-button';
import { EmptyWishlist } from '../../components/empty-wishlist/empty-wishlist';
import { ProductCard } from '../../components/product-card/product-card';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, MatIcon, MatIconButton, MatButton, EmptyWishlist],
  templateUrl: './my-wishlist.html',
  styles: ``,
})
export default class MyWishlist {
  readonly store = inject(EcommerceStore);
}
