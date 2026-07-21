import { computed, inject } from '@angular/core';
import { Product, sampleProducts } from './models/product';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { produce } from 'immer';
import { Toaster } from './services/toaster';

export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
};

export const EcommerceStore = signalStore(
  { providedIn: 'root' },
  withState<EcommerceState>({
    products: sampleProducts,
    category: 'all',
    wishlistItems: [],
  }),
  withComputed(({ category, products, wishlistItems }) => ({
    filteredProducts: computed(() => {
      if (category() === 'all') {
        return products();
      }

      return products().filter(
        (product) => product.category.toLowerCase() === category().toLowerCase(),
      );
    }),
    wishlistCount: computed(() => wishlistItems().length),
  })),
  withMethods((store, toaster = inject(Toaster)) => ({
    setCategory: signalMethod<string>((category) => patchState(store, { category })),
    addToWishlist: (product: Product) => {
      const updatedwishlistItems = produce(store.wishlistItems(), (draft) => {
        if (!draft.find((item) => item.id === product.id)) {
          draft.push(product);
        }
      });
      patchState(store, { wishlistItems: updatedwishlistItems });
      toaster.success(`${product.name} added to wishlist!`);
    },
    removeFromWishlist: (product: Product) => {
      const updatedwishlistItems = produce(store.wishlistItems(), (draft) => {
        const index = draft.findIndex((item) => item.id === product.id);
        if (index !== -1) {
          draft.splice(index, 1);
        }
      });
      patchState(store, { wishlistItems: updatedwishlistItems });
      toaster.success(`${product.name} removed from wishlist!`);
    },
    clearWishlist: () => {
      patchState(store, { wishlistItems: [] });
      toaster.success('Wishlist cleared!');
    },
  })),
);
