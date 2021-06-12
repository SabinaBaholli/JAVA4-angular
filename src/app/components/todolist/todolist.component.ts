import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/ToDoItem.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  itemName: string = '';
  itemDescription: string = '';
  toDoItems: Array<ToDoItem> = [
    {
      name: 'Study',
      description: 'test',
    },
    {
      name: 'Sleep',
      description: 'test'
    }
  ]
  constructor() { }

  addItem() {
    this.toDoItems.push({
      name: this.itemName,
      description: this.itemDescription
    })
    // clear the form
    this.itemName  = ''
    this.itemDescription = ''
  }

  ngOnInit(): void {
  }

}
