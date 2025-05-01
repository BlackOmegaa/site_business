import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingBarComponent } from './sliding-bar.component';

describe('SlidingBarComponent', () => {
  let component: SlidingBarComponent;
  let fixture: ComponentFixture<SlidingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
