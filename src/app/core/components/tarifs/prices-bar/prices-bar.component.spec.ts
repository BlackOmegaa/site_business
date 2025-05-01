import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesBarComponent } from './prices-bar.component';

describe('PricesBarComponent', () => {
  let component: PricesBarComponent;
  let fixture: ComponentFixture<PricesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
