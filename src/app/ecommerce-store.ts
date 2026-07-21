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
import { CartItem } from './models/cart';

export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
  cartItems: CartItem[];
};

export const EcommerceStore = signalStore(
  { providedIn: 'root' },
  withState<EcommerceState>({
    products: sampleProducts,
    category: 'all',
    wishlistItems: [],
    cartItems: [],
  }),
  withComputed(({ category, products, wishlistItems, cartItems }) => ({
    filteredProducts: computed(() => {
      if (category() === 'all') {
        return products();
      }

      return products().filter(
        (product) => product.category.toLowerCase() === category().toLowerCase(),
      );
    }),
    wishlistCount: computed(() => wishlistItems().length),
    cartCount: computed(() => cartItems().reduce((acc, item) => acc + item.quantity, 0)),
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
    addToCart: (product: Product, quantity: number = 1) => {
      const existingItemIndex = store
        .cartItems()
        .findIndex((item) => item.product.id === product.id);
      const updatedCartItems = produce(store.cartItems(), (draft) => {
        if (existingItemIndex !== -1) {
          draft[existingItemIndex].quantity += quantity;

          return;
        }

        draft.push({ product, quantity });
      });

      patchState(store, { cartItems: updatedCartItems });
      toaster.success(`${product.name} added to cart!`);
    },
    setItemQuantity: (params: { productId: string; quantity: number }) => {
      const index = store.cartItems().findIndex((item) => item.product.id === params.productId);
      const updatedCartItems = produce(store.cartItems(), (draft) => {
        draft[index].quantity = params.quantity;
      });

      patchState(store, { cartItems: updatedCartItems });
    },
    addAllWishlistToCart: () => {
      const updatedCartItems = produce(store.cartItems(), (draft) => {
        store.wishlistItems().forEach((product) => {
          if (!draft.find((item) => item.product.id === product.id)) {
            draft.push({ product, quantity: 1 });
          }
        });
      });

      patchState(store, { cartItems: updatedCartItems, wishlistItems: [] });
      toaster.success(`Products added to cart!`);
    },
    moveToWishlist: (product: Product) => {
      const updatedCartItems = store.cartItems().filter((item) => item.product.id !== product.id);
      const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
        if (!draft.find((item) => item.id === product.id)) {
          draft.push(product);
        }
      });

      patchState(store, { cartItems: updatedCartItems, wishlistItems: updatedWishlistItems });
      toaster.success(`Product added to wishlist!`);
    },
    removeFromCart: (product: Product) => {
      patchState(store, {
        cartItems: store.cartItems().filter((item) => item.product.id !== product.id),
      });
      toaster.success(`Product removed from wishlist!`);
    },
  })),
);
