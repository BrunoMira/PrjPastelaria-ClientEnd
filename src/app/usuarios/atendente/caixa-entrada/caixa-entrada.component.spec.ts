import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaEntradaComponent } from './caixa-entrada.component';

describe('CaixaEntradaComponent', () => {
  let component: CaixaEntradaComponent;
  let fixture: ComponentFixture<CaixaEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
