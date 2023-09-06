import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompComponent } from './new-comp.component';

describe('NewCompComponent', () => {
  let component: NewCompComponent;
  let fixture: ComponentFixture<NewCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCompComponent]
    });
    fixture = TestBed.createComponent(NewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
