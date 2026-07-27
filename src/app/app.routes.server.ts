import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';

import { CategoryApi } from './services/category-api';
import { ProductApi } from './services/product-api';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:category',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const catService = inject(CategoryApi);
      const names = catService.getCategories();

      return names.map((category) => ({ category }));
    },
  },
  {
    path: 'product/:productId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const productApi = inject(ProductApi);

      return productApi.getProducts().map(({ id: productId }) => ({ productId }));
    },
  },
  {
    path: 'wishlist',
    renderMode: RenderMode.Client,
  },
  {
    path: 'cart',
    renderMode: RenderMode.Client,
  },
  {
    path: 'checkout',
    renderMode: RenderMode.Client,
  },
  {
    path: 'order-success',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
