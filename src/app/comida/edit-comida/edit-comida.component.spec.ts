import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomidaComponent } from './edit-comida.component';

describe('EditcomidaComponent', () => {
  let component: EditcomidaComponent;
  let fixture: ComponentFixture<EditcomidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcomidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
