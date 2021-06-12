import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

  deleteItem(item: any) {
    console.log(item)
  }

}
