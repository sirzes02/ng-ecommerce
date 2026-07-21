import { Component, inject } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../../ecommerce-store';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tease-wishlist',
  imports: [ViewPanel, MatIcon, MatButton, RouterLink],
  templateUrl: './tease-wishlist.html',
  styles: ``,
})
export class TeaseWishlist {
  readonly store = inject(EcommerceStore);
}
