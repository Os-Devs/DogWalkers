import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCadastradosComponent } from './clientes-cadastrados.component';

describe('ClientesCadastradosComponent', () => {
  let component: ClientesCadastradosComponent;
  let fixture: ComponentFixture<ClientesCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesCadastradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
