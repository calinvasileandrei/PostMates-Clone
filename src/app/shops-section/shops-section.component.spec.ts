import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsSectionComponent } from './shops-section.component';

describe('MultipleSectionComponent', () => {
  let component: ShopsSectionComponent;
  let fixture: ComponentFixture<ShopsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
