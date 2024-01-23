import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignerComponent } from './designer/designer.component';
import { ComponentContainerComponent } from './designer/component-container/component-container.component';
import { TextComponent } from './base-components/text/text.component';
import { ListComponent } from './base-components/list/list.component';


@NgModule({
  declarations: [DesignerComponent,ComponentContainerComponent,TextComponent,ListComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    DesignerComponent,
  ]
})
export class ComponentBuilderModule { }
