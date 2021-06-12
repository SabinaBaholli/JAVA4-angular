import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() item: any;
  constructor(private beService: BackendService) { }

  ngOnInit(): void {
    console.log(this.item)
  }

  getItems() {
    this.beService.getItems().subscribe((response) => {
      this.beService.toDoItems = response;
    })
  }

  deleteItem(item: any) {
    const id = item.id;
    this.beService.deleteItem(id).subscribe((res)=> {
      this.getItems();
    });
  
  }

}
