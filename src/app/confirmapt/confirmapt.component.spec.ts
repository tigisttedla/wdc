import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaptComponent } from './confirmapt.component';

describe('ConfirmaptComponent', () => {
  let component: ConfirmaptComponent;
  let fixture: ComponentFixture<ConfirmaptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmaptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
