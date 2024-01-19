import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './components/document/document.component';
import { PageComponent } from './components/document/page/page.component';
import { SectionComponent } from './components/document/page/section/section.component';
import { ComponentComponent } from './components/document/page/section/component/component.component';
import { ListComponent } from './components/document/page/section/component/Childs/list/list.component';

@NgModule({
  declarations: [
    DocumentComponent,
    PageComponent,
    SectionComponent,
    ComponentComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DocumentComponent,
  ]
})
export class DocumentModule { }
