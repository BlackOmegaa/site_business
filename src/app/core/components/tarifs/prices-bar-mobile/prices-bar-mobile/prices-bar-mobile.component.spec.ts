import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesBarMobileComponent } from './prices-bar-mobile.component';

describe('PricesBarMobileComponent', () => {
  let component: PricesBarMobileComponent;
  let fixture: ComponentFixture<PricesBarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesBarMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
