import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { BackButton } from '../../components/back-button/back-button';
import { EmptyWishlist } from '../../components/empty-wishlist/empty-wishlist';
import { ProductCard } from '../../components/product-card/product-card';
import { EcommerceStore } from '../../ecommerce-store';
import { SeoManager } from '../../services/seo-manager';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, MatIcon, MatIconButton, MatButton, EmptyWishlist],
  templateUrl: './my-wishlist.html',
  styles: ``,
})
export default class MyWishlist {
  protected readonly store = inject(EcommerceStore);
  protected readonly seoManager = inject(SeoManager);

  constructor() {
    this.seoManager.updateSeoTags({
      title: 'My Wishlist',
      description: 'View your wishlits items',
    });
  }
}
