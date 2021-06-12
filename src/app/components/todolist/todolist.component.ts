import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/ToDoItem.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  itemName: string = '';
  itemDescription: string = '';
  toDoItems: Array<ToDoItem> = [];
  constructor(private beService: BackendService) { }

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
    this.beService.getItems().subscribe((response) => {
      console.log(response)
      this.toDoItems = response;
    });
  }

}
