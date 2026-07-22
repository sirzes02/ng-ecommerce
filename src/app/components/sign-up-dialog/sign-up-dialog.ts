import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

import { EcommerceStore } from '../../ecommerce-store';
import { SignUpParams } from '../../models/user';
import { SignInDialog } from '../sign-in-dialog/sign-in-dialog';

@Component({
  selector: 'app-sign-up-dialog',
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
  templateUrl: './sign-up-dialog.html',
  styles: ``,
})
export class SignUpDialog {
  readonly fb = inject(NonNullableFormBuilder);
  readonly store = inject(EcommerceStore);
  readonly data = inject<{ checkout: boolean } | undefined>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef);
  readonly matDialog = inject(MatDialog);

  passwordVisible = signal(false);

  signUpForm = this.fb.group({
    name: ['Santi Varela', Validators.required],
    email: ['santi@gmail.com', [Validators.required, Validators.email]],
    password: ['test123', Validators.required],
    confirmPassword: ['test123', Validators.required],
  });

  signUp() {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    const { name, email, password } = this.signUpForm.value;
    this.store.signUp({
      name,
      email,
      password,
      checkout: this.data?.checkout,
      dialogId: this.dialogRef.id,
    } as SignUpParams);
  }

  openSignInDialog() {
    this.dialogRef.close();
    this.matDialog.open(SignInDialog, {
      disableClose: true,
      data: { checkout: this.data?.checkout },
    });
  }
}
