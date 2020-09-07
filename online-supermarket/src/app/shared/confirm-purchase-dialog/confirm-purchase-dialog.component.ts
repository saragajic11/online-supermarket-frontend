import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-purchase-dialog',
  templateUrl: './confirm-purchase-dialog.component.html',
  styleUrls: ['./confirm-purchase-dialog.component.css']
})
export class ConfirmPurchaseDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmPurchaseDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close(true);
  }

}
