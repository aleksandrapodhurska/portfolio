import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerActionComponent } from './banner-action.component';

describe('BannerActionComponent', () => {
  let component: BannerActionComponent;
  let fixture: ComponentFixture<BannerActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
