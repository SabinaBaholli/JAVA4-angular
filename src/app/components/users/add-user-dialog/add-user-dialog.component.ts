
import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    templateUrl: './add-user-dialog.component.html',
  })
  export class AddUserDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<AddUserDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
       
    }
    onClick(f: NgForm): void {
        this.dialogRef.close({data: {user: f}});
      }
  }
  