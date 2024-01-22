import { Injectable,
  Injector,
 } from '@angular/core';
import DocumentInput from './input-modles/document-input';
import ComponentInput from './input-modles/component-input';
import { ListComponent } from './components/document/page/section/component/Childs/list/list.component';
import { TextComponent } from './components/document/page/section/component/Childs/text/text.component';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  public documentData:DocumentInput;
  constructor(
    private injector: Injector,
    
  ) {
    this.documentData= new DocumentInput();
    let comparray=this.documentData.pageInputs[0].sectionInputs[0].componentInputs
    comparray.push(new ComponentInput("Text"));
    comparray.push(new ComponentInput("List"));

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
