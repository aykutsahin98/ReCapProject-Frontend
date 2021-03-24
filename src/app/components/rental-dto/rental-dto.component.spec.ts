import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDtoComponent } from './rental-dto.component';

describe('RentalDtoComponent', () => {
  let component: RentalDtoComponent;
  let fixture: ComponentFixture<RentalDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
