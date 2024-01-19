import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import Child from 'src/app/modules/document/child';
import { ListComponent } from './Childs/list/list.component';
import { TextComponent } from './Childs/text/text.component';
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss'
})
export class ComponentComponent extends Child {
  @Input() editMod=true;
  userComp:any=ListComponent;

}
