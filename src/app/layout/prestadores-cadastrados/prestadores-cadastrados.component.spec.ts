import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoresCadastradosComponent } from './prestadores-cadastrados.component';

describe('PrestadoresCadastradosComponent', () => {
  let component: PrestadoresCadastradosComponent;
  let fixture: ComponentFixture<PrestadoresCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadoresCadastradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadoresCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
