import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandcolorcategoryComponent } from './brandcolorcategory.component';

describe('BrandcolorcategoryComponent', () => {
  let component: BrandcolorcategoryComponent;
  let fixture: ComponentFixture<BrandcolorcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandcolorcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandcolorcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
