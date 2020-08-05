import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from "@angular/material";
import { AddBookComponent } from "../Dialog/AddBookComponent";

@Injectable()
export class DialogService {

  constructor(protected dialog: MatDialog) { }

  public showAddBook(): Observable<boolean> {
    let dialogRef: MatDialogRef<AddBookComponent>;
    dialogRef = this.dialog.open(AddBookComponent, {
      width: '70%',
      minWidth: '500px'
    });
    return dialogRef.afterClosed();
  }
}
