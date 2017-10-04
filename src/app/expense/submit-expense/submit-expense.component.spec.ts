import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitExpenseComponent } from './submit-expense.component';

describe('SubmitExpenseComponent', () => {
  let component: SubmitExpenseComponent;
  let fixture: ComponentFixture<SubmitExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
