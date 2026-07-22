import { computed, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { withStorageSync } from '@angular-architects/ngrx-toolkit';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { produce } from 'immer';

import { SignInDialog } from './components/sign-in-dialog/sign-in-dialog';
import { CartItem } from './models/cart';
import { Order } from './models/order';
import { Product, sampleProducts } from './models/product';
import { sampleUser, SignInParams, SignUpParams, User } from './models/user';
import { Toaster } from './services/toaster';

export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
  cartItems: CartItem[];
  user: User | undefined;
  loading: boolean;
};

export const EcommerceStore = signalStore(
  { providedIn: 'root' },
  withState<EcommerceState>({
    products: sampleProducts,
    category: 'all',
    wishlistItems: [],
    cartItems: [],
    user: undefined,
    loading: false,
  }),
  withStorageSync({
    key: 'modern-store',
    select: ({ wishlistItems, cartItems, user }) => ({ wishlistItems, cartItems, user }),
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
  withMethods(
    (store, toaster = inject(Toaster), matDialog = inject(MatDialog), router = inject(Router)) => ({
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
        const updatedCartItems = produce(store.cartItems(), (draft) =>
          store.wishlistItems().forEach((product) => {
            if (!draft.find((item) => item.product.id === product.id)) {
              draft.push({ product, quantity: 1 });
            }
          }),
        );

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
      proceedToCheckout: () => {
        if (!store.user()) {
          matDialog.open(SignInDialog, { disableClose: true, data: { checkout: true } });
          return;
        }

        router.navigate(['/checkout']);
      },
      placeOrder: async () => {
        patchState(store, { loading: true });

        const user = store.user();

        if (!user) {
          patchState(store, { loading: false });
          toaster.error('Please login before placing order');
          return;
        }

        const _order: Order = {
          id: crypto.randomUUID(),
          userId: user.id,
          total: Math.round(
            store.cartItems().reduce((acc, item) => acc + item.quantity * item.product.price, 0),
          ),
          items: store.cartItems(),
          paymentStatus: 'success',
        };

        await new Promise((resolve) => setTimeout(resolve, 1000));
        patchState(store, { loading: false, cartItems: [] });
        router.navigate(['order-success']);
      },
      signIn: ({ email, checkout, dialogId }: SignInParams) => {
        patchState(store, {
          user: { ...sampleUser, email },
        });

        matDialog.getDialogById(dialogId)?.close();

        if (checkout) {
          router.navigate(['/checkout']);
        }
      },
      signUp: ({ email, checkout, name, dialogId }: SignUpParams) => {
        patchState(store, {
          user: { ...sampleUser, email, name },
        });

        matDialog.getDialogById(dialogId)?.close();

        if (checkout) {
          router.navigate(['/checkout']);
        }
      },
      signOut: () => patchState(store, { user: undefined }),
    }),
  ),
);
