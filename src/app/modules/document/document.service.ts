import { Injectable,
  Injector,
 } from '@angular/core';
import DocumentInput from './input-modles/document-input';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  public documentData:DocumentInput;
  constructor(
    private injector: Injector,
    
  ) {
    this.documentData= new DocumentInput();
  }


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
