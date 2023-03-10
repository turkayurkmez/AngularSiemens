import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ShowTodoItemComponent } from './show-todo-item/show-todo-item.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    ShowTodoItemComponent,
    AddTodoItemComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
