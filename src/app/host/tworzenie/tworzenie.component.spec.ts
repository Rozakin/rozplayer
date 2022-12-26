import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TworzenieComponent } from './tworzenie.component';

describe('TworzenieComponent', () => {
  let component: TworzenieComponent;
  let fixture: ComponentFixture<TworzenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TworzenieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TworzenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
