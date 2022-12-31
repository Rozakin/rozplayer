import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowiadomienieComponent } from './powiadomienie.component';

describe('PowiadomienieComponent', () => {
  let component: PowiadomienieComponent;
  let fixture: ComponentFixture<PowiadomienieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowiadomienieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowiadomienieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
