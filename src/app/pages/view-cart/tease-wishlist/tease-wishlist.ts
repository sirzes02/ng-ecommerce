import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { ViewPanel } from '../../../directives/view-panel';
import { EcommerceStore } from '../../../ecommerce-store';

@Component({
  selector: 'app-tease-wishlist',
  imports: [ViewPanel, MatIcon, MatButton, RouterLink],
  templateUrl: './tease-wishlist.html',
  styles: ``,
})
export class TeaseWishlist {
  readonly store = inject(EcommerceStore);
}
