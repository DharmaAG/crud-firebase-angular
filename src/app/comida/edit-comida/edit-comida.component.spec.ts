import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComidaComponent } from './edit-comida.component';

describe('EditComidaComponent', () => {
  let component: EditComidaComponent;
  let fixture: ComponentFixture<EditComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
