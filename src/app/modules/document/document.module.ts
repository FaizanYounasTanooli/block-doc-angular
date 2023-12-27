import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './components/document/document.component';
import { PageComponent } from './components/document/page/page.component';


@NgModule({
  declarations: [
    DocumentComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DocumentComponent,
  ]
})
export class DocumentModule { }
