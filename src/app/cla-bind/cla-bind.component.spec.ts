import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaBindComponent } from './cla-bind.component';

describe('ClaBindComponent', () => {
  let component: ClaBindComponent;
  let fixture: ComponentFixture<ClaBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
