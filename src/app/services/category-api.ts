import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CategoryApi {
  private categories = ['all', 'electronics', 'clothing', 'accessories', 'fashion', 'home'];

  getCategories(): string[] {
    return this.categories;
  }
}
