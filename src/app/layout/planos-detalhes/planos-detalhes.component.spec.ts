import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosDetalhesComponent } from './planos-detalhes.component';

describe('PlanosDetalhesComponent', () => {
  let component: PlanosDetalhesComponent;
  let fixture: ComponentFixture<PlanosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanosDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
