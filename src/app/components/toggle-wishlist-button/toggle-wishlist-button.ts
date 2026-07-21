import { Component, computed, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';
import { Product } from '../../models/product';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatIconButton],
  templateUrl: './toggle-wishlist-button.html',
  styles: ``,
})
export class ToggleWishlistButton {
  readonly store = inject(EcommerceStore);

  product = input.required<Product>();

  isInWishlist = computed(() =>
    this.store.wishlistItems().some((item) => item.id === this.product().id),
  );

  toggleWishlist(product: Product): void {
    if (this.isInWishlist()) {
      this.store.removeFromWishlist(product);
    } else {
      this.store.addToWishlist(product);
    }
  }
}
