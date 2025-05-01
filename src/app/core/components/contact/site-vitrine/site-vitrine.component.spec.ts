import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVitrineComponent } from './site-vitrine.component';

describe('SiteVitrineComponent', () => {
  let component: SiteVitrineComponent;
  let fixture: ComponentFixture<SiteVitrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteVitrineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
