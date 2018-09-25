import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LQProductComponent } from './lqproduct.component';

describe('LQProductComponent', () => {
  let component: LQProductComponent;
  let fixture: ComponentFixture<LQProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LQProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LQProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
