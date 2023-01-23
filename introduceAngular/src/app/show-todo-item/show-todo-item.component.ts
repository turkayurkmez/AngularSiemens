import { Component, Input } from '@angular/core';
import { todoItem } from '../models/todoItem.model';

@Component({
  selector: 'app-show-todo-item',
  templateUrl: './show-todo-item.component.html',
  styleUrls: ['./show-todo-item.component.css']
})
export class ShowTodoItemComponent {

  @Input('currentTodo') todoItem: todoItem;

}
