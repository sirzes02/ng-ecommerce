import { Component, computed, input, signal } from '@angular/core';
import { Product, sampleProducts } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatListItem, MatListItemTitle, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe, NgClass } from '@angular/common';

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
  ],
  templateUrl: './products-grid.html',
  styles: ``,
})
export default class ProductsGrid {
  readonly categories = signal<string[]>(['all', 'electronics', 'fashion', 'home']);

  category = input<string>('all');
  products = signal<Product[]>(sampleProducts);

  filteredProducts = computed(() => {
    if (this.category() === 'all') {
      return this.products();
    }

    return this.products().filter(
      (product) => product.category.toLowerCase() === this.category().toLowerCase(),
    );
  });

  addToCart(product: Product): void {}
}
