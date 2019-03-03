import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDestroyComponent } from './prueba-destroy.component';

describe('PruebaDestroyComponent', () => {
  let component: PruebaDestroyComponent;
  let fixture: ComponentFixture<PruebaDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
