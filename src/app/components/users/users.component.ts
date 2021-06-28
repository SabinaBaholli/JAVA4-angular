import { Component, Inject, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/User.model';
import { BackendService } from 'src/app/services/backend.service';
import {MatDialog} from '@angular/material/dialog';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { UserService } from 'src/app/services/user.service';

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
    private userService: UserService,
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
      const user = result.data.user.form.value;
      this.userService.addUser(user)
    });
  }

}

