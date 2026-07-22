import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

import { ViewPanel } from '../../../directives/view-panel';

@Component({
  selector: 'app-payment-form',
  imports: [ViewPanel, MatIcon, MatRadioGroup, MatRadioButton],
  templateUrl: './payment-form.html',
  styles: ``,
})
export class PaymentForm {}
