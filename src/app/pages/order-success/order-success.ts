import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-success',
  imports: [MatIcon, MatButton, RouterLink],
  templateUrl: './order-success.html',
  styles: ``,
})
export default class OrderSuccess {}
