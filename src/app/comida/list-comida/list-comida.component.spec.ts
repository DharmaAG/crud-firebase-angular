import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomidaComponent } from './list-comida.component';

describe('ListcomidaComponent', () => {
  let component: ListcomidaComponent;
  let fixture: ComponentFixture<ListcomidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcomidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
