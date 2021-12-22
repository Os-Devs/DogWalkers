import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginValidacaoComponent } from './login-validacao.component';

describe('LoginValidacaoComponent', () => {
  let component: LoginValidacaoComponent;
  let fixture: ComponentFixture<LoginValidacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginValidacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
