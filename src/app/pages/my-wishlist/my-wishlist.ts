import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { EcommerceStore } from '../../ecommerce-store';
import { ProductCard } from '../../components/product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { EmptyWishlist } from '../../components/empty-wishlist/empty-wishlist';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, MatIcon, MatIconButton, MatButton, EmptyWishlist],
  templateUrl: './my-wishlist.html',
  styles: ``,
})
export default class MyWishlist {
  readonly store = inject(EcommerceStore);
}
