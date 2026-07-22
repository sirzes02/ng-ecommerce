import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideRouter } from '@angular/router';

import { SignInDialog } from './sign-in-dialog';

describe('SignInDialog', () => {
  let component: SignInDialog;
  let fixture: ComponentFixture<SignInDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInDialog],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { checkout: false } },
        { provide: MatDialogRef, useValue: { close: () => {}, id: 'dialog-1' } },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
