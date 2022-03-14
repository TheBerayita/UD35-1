import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ud35Component } from './ud35.component';

describe('Ud35Component', () => {
  let component: Ud35Component;
  let fixture: ComponentFixture<Ud35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ud35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ud35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
