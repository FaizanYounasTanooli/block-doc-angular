import { Component, Input } from '@angular/core';
import Child from 'src/app/modules/document/child';
import { ComponentComponent } from './component/component.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent extends Child {
  @Input() components:any[]=[{},{}];
  comp:any=ComponentComponent;
}
