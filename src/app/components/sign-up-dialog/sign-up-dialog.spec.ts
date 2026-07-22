import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideRouter } from '@angular/router';

import { SignUpDialog } from './sign-up-dialog';

describe('SignUpDialog', () => {
  let component: SignUpDialog;
  let fixture: ComponentFixture<SignUpDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpDialog],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { checkout: false } },
        { provide: MatDialogRef, useValue: { close: () => {}, id: 'dialog-1' } },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
