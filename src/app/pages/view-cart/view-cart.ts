import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { BackButton } from '../../components/back-button/back-button';
import { SummarizeOrder } from '../../components/summarize-order/summarize-order';
import { EcommerceStore } from '../../ecommerce-store';
import { ListCartItems } from './list-cart-items/list-cart-items';
import { TeaseWishlist } from './tease-wishlist/tease-wishlist';

@Component({
  selector: 'app-view-cart',
  imports: [BackButton, ListCartItems, TeaseWishlist, SummarizeOrder, MatButton],
  templateUrl: './view-cart.html',
  styles: ``,
})
export default class ViewCart {
  readonly store = inject(EcommerceStore);
}
