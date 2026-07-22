import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

import { ViewPanel } from '../../../directives/view-panel';

@Component({
  selector: 'app-shipping-form',
  imports: [ViewPanel, MatIcon, MatFormField, MatInput],
  templateUrl: './shipping-form.html',
  styles: ``,
})
export class ShippingForm {}
