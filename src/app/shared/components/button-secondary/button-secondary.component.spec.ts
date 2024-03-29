import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSecondaryComponent } from './button-secondary.component';

describe('ButtonPrimaryComponent', () => {
  let component: ButtonSecondaryComponent;
  let fixture: ComponentFixture<ButtonSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
