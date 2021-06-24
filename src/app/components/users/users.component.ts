import { Component, Inject, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/User.model';
import { BackendService } from 'src/app/services/backend.service';
import {MatDialog} from '@angular/material/dialog';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';

const ELEMENT_DATA: UserModel[] = [];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'age'];
  dataSource = ELEMENT_DATA;
  name: string = 'test';
  constructor(
    private beService: BackendService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.beService.getUsers().subscribe((users) => {
      this.dataSource = users;
    })  
  }

  addUser() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      //todo add user
    });
  }

}

