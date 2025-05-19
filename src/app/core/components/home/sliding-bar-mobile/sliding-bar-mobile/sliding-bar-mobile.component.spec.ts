import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingBarMobileComponent } from './sliding-bar-mobile.component';

describe('SlidingBarMobileComponent', () => {
  let component: SlidingBarMobileComponent;
  let fixture: ComponentFixture<SlidingBarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingBarMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
