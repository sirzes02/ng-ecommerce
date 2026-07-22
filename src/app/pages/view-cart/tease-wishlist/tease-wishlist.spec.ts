import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TeaseWishlist } from './tease-wishlist';

describe('TeaseWishlist', () => {
  let component: TeaseWishlist;
  let fixture: ComponentFixture<TeaseWishlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaseWishlist],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TeaseWishlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
