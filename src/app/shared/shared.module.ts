import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { PageComponent } from './document/page/page.component';



@NgModule({
  declarations: [
    DocumentComponent,
    PageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[DocumentComponent]
})
export class SharedModule { }
  