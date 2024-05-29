import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paises5Component } from './paises5.component';

describe('Paises5Component', () => {
  let component: Paises5Component;
  let fixture: ComponentFixture<Paises5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paises5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Paises5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
