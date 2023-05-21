import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-agree.component',
  templateUrl: './dialog-agree.component.component.html',
  styleUrls: ['./dialog-agree.component.component.scss']
})
export class DialogAgreeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAgreeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  close(){
    return this.dialogRef.close();
  }

}
