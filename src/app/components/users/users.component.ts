import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/User.model';
import { BackendService } from 'src/app/services/backend.service';
import {MatDialog} from '@angular/material/dialog';

const ELEMENT_DATA: UserModel[] = [];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'age'];
  dataSource = ELEMENT_DATA;

  constructor(
    private beService: BackendService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.beService.getUsers().subscribe((users) => {
      this.dataSource = users;
    })  
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'add-user.html',
})
export class DialogContentExampleDialog {}
