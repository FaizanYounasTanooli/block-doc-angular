import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './modules/document/components/document/document.component';
import { DesignerComponent } from './modules/component-builder/designer/designer.component';

const routes: Routes = [
  {
    path:'component-designer',
    component:DesignerComponent,
  },
  {
    path:'document',
    component:DocumentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
