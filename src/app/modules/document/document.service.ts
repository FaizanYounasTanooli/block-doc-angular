import { Injectable
  , Component,
  ViewContainerRef,
  ComponentRef,
  Injector,
  ApplicationRef,
  EmbeddedViewRef,
  Type,
 } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(
    private injector: Injector,
  ) {}
  marginTop:number=1;
  marginBottom:number=1;
  marginLeft:number=1;
  marginRight:number=1;
 
  
  get margin():number[] {
    return [this.marginTop,this.marginRight,this.marginBottom,this.marginLeft];
  }
  get rullerTop():number[] {
    let ruller:number[]=[];
    return ruller;
  }
  
  

}
