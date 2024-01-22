import { Component, Input, ViewChild, input } from '@angular/core';
import Child from 'src/app/modules/document/child';
import { ComponentComponent } from './component/component.component';
import SectionSetup from 'src/app/modules/document/section-setup';
import { BehaviorSubject } from 'rxjs';
import { PageComponent } from '../page.component';
import ComponentInput from 'src/app/modules/document/input-modles/component-input';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() sectionSetup:SectionSetup= new SectionSetup();
  @Input() componetInputs!:ComponentInput[];
  @Input() page!:PageComponent;
    public get setupSubject(): BehaviorSubject<SectionSetup> {
        return new BehaviorSubject(this.sectionSetup);
    }
  comp:any=ComponentComponent;
}
