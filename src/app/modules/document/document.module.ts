import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './components/document/document.component';
import { PageComponent } from './components/document/page/page.component';
import { SectionComponent } from './components/document/page/section/section.component';
import { ComponentComponent } from './components/document/page/section/component/component.component';

@NgModule({
  declarations: [
    DocumentComponent,
    PageComponent,
    SectionComponent,
    ComponentComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DocumentComponent,
  ]
})
export class DocumentModule { }
