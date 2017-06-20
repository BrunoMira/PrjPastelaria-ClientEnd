import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinheiroComponent } from './cozinheiro.component';

describe('CozinheiroComponent', () => {
  let component: CozinheiroComponent;
  let fixture: ComponentFixture<CozinheiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CozinheiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CozinheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
