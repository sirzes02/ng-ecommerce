import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sampleProducts } from '../../../models/product';
import { ProductInfo } from './product-info';

describe('ProductInfo', () => {
  let component: ProductInfo;
  let fixture: ComponentFixture<ProductInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductInfo);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('product', sampleProducts[0]);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
