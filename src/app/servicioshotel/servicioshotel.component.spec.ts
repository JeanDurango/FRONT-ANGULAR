import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioshotelComponent } from './servicioshotel.component';

describe('ServicioshotelComponent', () => {
  let component: ServicioshotelComponent;
  let fixture: ComponentFixture<ServicioshotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioshotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioshotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
