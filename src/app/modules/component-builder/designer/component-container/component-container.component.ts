import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog"
import { SelectComponentPopupComponent } from '../select-component-popup/select-component-popup.component';
import { firstValueFrom } from 'rxjs';
import { TextComponent } from '../../base-components/text/text.component';

@Component({
  selector: 'app-component-container',
  templateUrl: './component-container.component.html',
  styleUrl: './component-container.component.scss'
})
export class ComponentContainerComponent {
  constructor(private dialog:MatDialog) {

  }
  items:any[]=[];

  async addComponent() {
    let its=this.items;
    let dialogRef =this.dialog.open(SelectComponentPopupComponent, {
      height: '400px',
      width: '600px',
    });
    const dialogResult=await firstValueFrom(dialogRef.afterClosed());
    if (dialogResult=="TextComponent")
    {
      this.items.push(TextComponent);
    }
    else {
      this.items.push(ComponentContainerComponent);
    }
    let SaveArray=this.saveComponent(this.items);
    let a=10;
  }
  saveComponent(ContainerItems:any[]):string[] {
    let itemsArray:any[]=[];  
    for (let item of ContainerItems) {
      if (item.name== 'ComponentContainerComponent') {
        let test=(item as unknown as ComponentContainerComponent);
        itemsArray.push(this.saveComponent( test.items));
      }
      else {
        itemsArray.push(item.name);
      }
    }
    
    return itemsArray;
  }
}
