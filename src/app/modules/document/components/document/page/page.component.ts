import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SectionComponent } from './section/section.component';
import PageSetup from '../../../page-setup';
import { DocumentComponent } from '../document.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent  implements OnInit {
  @Input() sectionInputs:any[]=[{},{},{}];
  @Input() pageSetup:PageSetup = new PageSetup();
  doc!:DocumentComponent;
  sectionComp:any=SectionComponent;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
