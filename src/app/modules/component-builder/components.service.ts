import { Injectable } from '@angular/core';
import { TextComponent } from './base-components/text/text.component';
import { ComponentContainerComponent } from './designer/component-container/component-container.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  components!:any[];

  addComponent(compType:string,containerRef:any[]) {
    
  }

  constructor() { }
}
