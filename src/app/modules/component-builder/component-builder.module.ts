import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignerComponent } from './designer/designer.component';
import { ComponentContainerComponent } from './designer/component-container/component-container.component';


@NgModule({
  declarations: [DesignerComponent,ComponentContainerComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    DesignerComponent,
  ]
})
export class ComponentBuilderModule { }
