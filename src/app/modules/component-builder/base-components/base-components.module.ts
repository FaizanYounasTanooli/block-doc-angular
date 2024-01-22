import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [TextComponent,ListComponent],
  imports: [
    CommonModule
  ],
  exports:[TextComponent,ListComponent]
})
export class BaseComponentsModule { }
