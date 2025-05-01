import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBoutiqueComponent } from './site-boutique.component';

describe('SiteBoutiqueComponent', () => {
  let component: SiteBoutiqueComponent;
  let fixture: ComponentFixture<SiteBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteBoutiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
