import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesPoblados10Component } from './paises-poblados10.component';

describe('PaisesPoblados10Component', () => {
  let component: PaisesPoblados10Component;
  let fixture: ComponentFixture<PaisesPoblados10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisesPoblados10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisesPoblados10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
