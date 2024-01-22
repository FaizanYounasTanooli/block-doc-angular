import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-component-popup',
  standalone: true,
  imports: [],
  templateUrl: './select-component-popup.component.html',
  styleUrl: './select-component-popup.component.scss'
})
export class SelectComponentPopupComponent {
  constructor(public dialogRef: MatDialogRef<SelectComponentPopupComponent>) {

  }
  onCompontSelect(CompType:string) {
    this.dialogRef.close(CompType);
  }
}
