import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { sampleProducts } from '../../models/product';
import ViewProductDetail from './view-product-detail';

describe('ViewProductDetail', () => {
  let component: ViewProductDetail;
  let fixture: ComponentFixture<ViewProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProductDetail, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProductDetail);
    fixture.componentRef.setInput('productId', sampleProducts[0].id);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
