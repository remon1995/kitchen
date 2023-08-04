import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakedComponent } from './baked.component';

describe('BakedComponent', () => {
  let component: BakedComponent;
  let fixture: ComponentFixture<BakedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BakedComponent]
    });
    fixture = TestBed.createComponent(BakedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
