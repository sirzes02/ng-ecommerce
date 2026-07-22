import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton,MatIconButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

import { EcommerceStore } from '../../ecommerce-store';
import { SignInParams } from '../../models/user';
import { SignUpDialog } from '../sign-up-dialog/sign-up-dialog';

@Component({
  selector: 'app-sign-in-dialog',
  imports: [
    MatIconButton,
    MatIcon,
    MatDialogClose,
    MatFormField,
    MatInput,
    MatPrefix,
    MatSuffix,
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in-dialog.html',
  styles: ``,
})
export class SignInDialog {
  readonly fb = inject(NonNullableFormBuilder);
  readonly store = inject(EcommerceStore);
  readonly data = inject<{ checkout: boolean } | undefined>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef);
  readonly matDialog = inject(MatDialog);

  passwordVisible = signal(false);

  signInForm = this.fb.group({
    email: ['santi@gmail.com', [Validators.required, Validators.email]],
    password: ['test123', Validators.required],
  });

  signIn() {
    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.signInForm.value;
    this.store.signIn({
      email,
      password,
      checkout: this.data?.checkout,
      dialogId: this.dialogRef.id,
    } as SignInParams);
  }

  openSignUpDialog() {
    this.dialogRef.close();
    this.matDialog.open(SignUpDialog, {
      disableClose: true,
      data: { checkout: this.data?.checkout },
    });
  }
}
