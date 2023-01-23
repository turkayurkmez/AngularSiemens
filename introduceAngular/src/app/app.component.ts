import { Component } from '@angular/core';
import { todoItems } from './models/todoItem.mock';
import { todoItem } from './models/todoItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<p>{{paragraph}}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introduceAngular';
  paragraph = 'Bu bir paragraftır';

  createdDate: string = 'Ocak 2023';
  isChecked: boolean = true;

  todoItem: todoItem = new todoItem();
  todoItems: todoItem[] = todoItems



  getTotalTasksUndone(): number {
    return this.todoItems.filter(t => !t.isDone).length;
  }

  buttonText: string = 'Yapılan İşleri Gizle';

  isAllTaskDisplaying: boolean = true;

  filter(): void {
    this.isAllTaskDisplaying = !this.isAllTaskDisplaying;
    !this.isAllTaskDisplaying ? this.todoItems = this.todoItems.filter(t => !t.isDone) : this.todoItems = todoItems;
    this.buttonText = this.isAllTaskDisplaying ? 'Yapılan İşleri Gizle' : 'Tümünü Göster'
  }

  addNewItem(task:string):void{
    var newItem = new todoItem(task,false);
    this.todoItems.push(newItem);
  }

  newTaskEventHandled(newItem:string){
    console.log('Kendi eventimiz fırladı!!!');
    var item = new todoItem(newItem,false);
    this.todoItems.push(item);
    
  }



}
