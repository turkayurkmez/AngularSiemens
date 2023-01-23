import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTodoItemComponent } from './show-todo-item.component';

describe('ShowTodoItemComponent', () => {
  let component: ShowTodoItemComponent;
  let fixture: ComponentFixture<ShowTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
