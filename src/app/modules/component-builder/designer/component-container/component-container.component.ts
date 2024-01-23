import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { SelectComponentPopupComponent } from '../select-component-popup/select-component-popup.component';
import { firstValueFrom } from 'rxjs';
import { TextComponent } from '../../base-components/text/text.component';

@Component({
  selector: 'app-component-container',
  templateUrl: './component-container.component.html',
  styleUrl: './component-container.component.scss'
})
export class ComponentContainerComponent implements OnInit {
  @Input() isParent:boolean=false;
  //@ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild(ComponentContainerComponent, { static: true }) myChildComponent!: ComponentContainerComponent;
  @Input() items!: any[];
  constructor(private dialog: MatDialog,
    ) {
      
      
  }
  ngOnInit(): void {
    if (this.isParent)
      {
        let items =this.getObject('Comp') as any[];
        if (items && items.length>0)
        {
          this.items=items;
        }
        else {
          this.items=[]
        }
      }
  }
  isArray(item:any)
  {
    return item instanceof Array;

  }

  getObject(key: string): any | null {
    const jsonString = localStorage.getItem(key);
    if (jsonString) {
      return JSON.parse(jsonString);
    }

    return null;
  }

  saveObject(key: string, value: any): void {
    const jsonString = JSON.stringify(value);
    localStorage.setItem(key, jsonString);
  }
  
  async addComponent() {
    let its = this.items;
    let dialogRef = this.dialog.open(SelectComponentPopupComponent, {
      height: '400px',
      width: '600px',
    });
    const dialogResult = await firstValueFrom(dialogRef.afterClosed());
    //let instance =this.addFinalComp(dialogResult);
    if (dialogResult !='ComponentContainerComponent')
    {
      this.items.push(dialogResult);
    }
    else {

      this.items.push([]);
    }
  }


  saveComponent() {
    let SaveArray = this.getComponents();
    this.saveObject("Comp",SaveArray); 
  }
  getComponents(): string[] {
    let itemsArray: any[] = [];
    for (let item of this.items) {
      if (item == 'ComponentContainerComponent') {
        let itemsToPush= this.myChildComponent.getComponents();
        itemsArray.push(itemsToPush);
      }
      else {
        itemsArray.push(item);
      }
    }
    return itemsArray;
  }
}
