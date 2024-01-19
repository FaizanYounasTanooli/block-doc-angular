import { Component, Input, OnInit, ViewChild } from '@angular/core';
import Page from '../../../page';
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent extends Page implements OnInit {
  @Input() sectionInputs:any[]=[{},{},{}];
  sectionComp:any=SectionComponent;
  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
