import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { MatListItem, MatListItemTitle, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

import { ProductCard } from '../../components/product-card/product-card';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';
import { EcommerceStore } from '../../ecommerce-store';

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
export default class ProductsGrid implements OnInit {
  readonly store = inject(EcommerceStore);
  readonly categories = signal<string[]>(['all', 'electronics', 'fashion', 'home']);

  category = input<string>('all');

  ngOnInit() {
    this.store.setCategory(this.category);
  }
}
