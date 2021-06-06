import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hello world';
  email = '';
  showButton = true;
  isBlue = true;
  students = ['Ersi', 'Stela','Paola']

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    alert('Button clicked')
  }

}
