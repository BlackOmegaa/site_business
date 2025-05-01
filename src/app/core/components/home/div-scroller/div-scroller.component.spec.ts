import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivScrollerComponent } from './div-scroller.component';

describe('DivScrollerComponent', () => {
  let component: DivScrollerComponent;
  let fixture: ComponentFixture<DivScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivScrollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
