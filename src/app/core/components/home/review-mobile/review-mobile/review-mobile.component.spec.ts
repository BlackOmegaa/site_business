import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewMobileComponent } from './review-mobile.component';

describe('ReviewMobileComponent', () => {
  let component: ReviewMobileComponent;
  let fixture: ComponentFixture<ReviewMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
