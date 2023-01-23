import { todoItem } from "./todoItem.model";

export const todoItems: todoItem[] = [
    new todoItem('Angular Öğren', false),
    new todoItem('Restull API geliştir', true),
    {
        task: 'Çiçekleri Sula',
        isDone: true
    }
]