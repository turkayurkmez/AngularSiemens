import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent {

  @Output() addNewItemEvent = new EventEmitter<string>();

  addNewItem(task: string){
    this.addNewItemEvent.emit(task);
  }

}
