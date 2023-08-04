import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatComponent } from './meat.component';

describe('MeatComponent', () => {
  let component: MeatComponent;
  let fixture: ComponentFixture<MeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeatComponent]
    });
    fixture = TestBed.createComponent(MeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});