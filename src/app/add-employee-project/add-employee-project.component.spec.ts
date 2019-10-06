import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeProjectComponent } from './add-employee-project.component';

describe('AddEmployeeProjectComponent', () => {
  let component: AddEmployeeProjectComponent;
  let fixture: ComponentFixture<AddEmployeeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
