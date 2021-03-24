import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaHomeComponent } from './tienda-home.component';

describe('TiendaHomeComponent', () => {
  let component: TiendaHomeComponent;
  let fixture: ComponentFixture<TiendaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
