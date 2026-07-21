import { Component, inject, input, signal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatListItem, MatListItemTitle, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe, NgClass } from '@angular/common';
import { EcommerceStore } from '../../ecommerce-store';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCard,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe,
    NgClass,
    ToggleWishlistButton,
  ],
  templateUrl: './products-grid.html',
  styles: ``,
})
export default class ProductsGrid {
  readonly store = inject(EcommerceStore);
  readonly categories = signal<string[]>(['all', 'electronics', 'fashion', 'home']);

  category = input<string>('all');

  constructor() {
    this.store.setCategory(this.category);
  }
}
