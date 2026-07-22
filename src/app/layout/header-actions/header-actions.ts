import { Component, inject } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import { SignInDialog } from '../../components/sign-in-dialog/sign-in-dialog';
import { SignUpDialog } from '../../components/sign-up-dialog/sign-up-dialog';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-header-actions',
  imports: [
    MatButton,
    MatIconButton,
    MatIcon,
    RouterLink,
    MatBadge,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDivider,
  ],
  templateUrl: './header-actions.html',
  styles: ``,
})
export class HeaderActions {
  readonly store = inject(EcommerceStore);
  readonly matDialog = inject(MatDialog, { optional: true });

  openSignInDialog() {
    this.matDialog?.open(SignInDialog, {
      disableClose: true,
    });
  }

  openSignUpDialog() {
    this.matDialog?.open(SignUpDialog, {
      disableClose: true,
    });
  }
}
