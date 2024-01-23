import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignerComponent } from './designer/designer.component';
import { ComponentContainerComponent } from './designer/component-container/component-container.component';
import { BaseComponentsModule } from './base-components/base-components.module';


@NgModule({
  declarations: [DesignerComponent,ComponentContainerComponent],
  imports: [
    CommonModule,
    BaseComponentsModule,
  ],
  exports:[
    DesignerComponent,
  ]
})
export class ComponentBuilderModule { }
