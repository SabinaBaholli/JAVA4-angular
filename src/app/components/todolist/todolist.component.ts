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
  constructor(public beService: BackendService) { }

  addItem() {
    const item = {
      name: this.itemName,
      description: this.itemDescription
    }
    this.beService.addItem(item).subscribe(() => {
      this.beService.toDoItems.push(item)
    })
    // clear the form
    this.itemName  = ''
    this.itemDescription = ''
  }

  ngOnInit(): void {
    this.beService.getItems().subscribe((response) => {
      console.log(response)
      this.beService.toDoItems = response;
    });
  }

}
