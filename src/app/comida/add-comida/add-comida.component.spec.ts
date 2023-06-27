import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomidaComponent } from './add-comida.component';

describe('AddcomidaComponent', () => {
  let component: AddcomidaComponent;
  let fixture: ComponentFixture<AddcomidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcomidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
