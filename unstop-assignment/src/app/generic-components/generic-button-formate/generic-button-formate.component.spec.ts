import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericButtonFormateComponent } from './generic-button-formate.component';

describe('GenericButtonFormateComponent', () => {
  let component: GenericButtonFormateComponent;
  let fixture: ComponentFixture<GenericButtonFormateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericButtonFormateComponent]
    });
    fixture = TestBed.createComponent(GenericButtonFormateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
