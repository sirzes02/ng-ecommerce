import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, inject, Injector, input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemTitle, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

import { ProductCard } from '../../components/product-card/product-card';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';
import { EcommerceStore } from '../../ecommerce-store';
import { CategoryApi } from '../../services/category-api';

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
    MatButton,
    MatIcon,
    RouterLink,
    TitleCasePipe,
    NgClass,
    ToggleWishlistButton,
  ],
  templateUrl: './products-grid.html',
  styles: ``,
})
export default class ProductsGrid implements OnInit {
  readonly injector = inject(Injector);
  readonly store = inject(EcommerceStore);
  readonly categories = inject(CategoryApi).getCategories();

  category = input<string>('all');

  constructor() {
    this.store.setProductListSeoTags(this.category);
  }

  ngOnInit() {
    this.store.setCategory(this.category, { injector: this.injector });
  }
}
