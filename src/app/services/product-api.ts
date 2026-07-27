import { Injectable } from '@angular/core';

import { Product, sampleProducts } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductApi {
  getProducts(): Product[] {
    return sampleProducts;
  }

  getProductById(productId: string): Product | undefined {
    return this.getProducts().find((product) => product.id === productId);
  }
}
