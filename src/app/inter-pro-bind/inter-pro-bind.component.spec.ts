import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterProBindComponent } from './inter-pro-bind.component';

describe('InterProBindComponent', () => {
  let component: InterProBindComponent;
  let fixture: ComponentFixture<InterProBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterProBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterProBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
