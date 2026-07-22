import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { BackButton } from '../../components/back-button/back-button';
import { SummarizeOrder } from '../../components/summarize-order/summarize-order';
import { EcommerceStore } from '../../ecommerce-store';
import { PaymentForm } from './payment-form/payment-form';
import { ShippingForm } from './shipping-form/shipping-form';

@Component({
  selector: 'app-checkout',
  imports: [BackButton, ShippingForm, PaymentForm, SummarizeOrder, CurrencyPipe, MatButton],
  templateUrl: './checkout.html',
  styles: ``,
})
export default class Checkout {
  readonly store = inject(EcommerceStore);
}
