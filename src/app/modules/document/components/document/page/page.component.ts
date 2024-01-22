import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SectionComponent } from './section/section.component';
import PageSetup from '../../../page-setup';
import { DocumentComponent } from '../document.component';
import { DocumentService } from '../../../document.service';
import SectionInput from '../../../input-modles/section-input';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent  implements OnInit {
  @Input() sectionInputs!:SectionInput[];
  @Input() pageSetup:PageSetup = new PageSetup();
  @Input() PageNumber!:number;
  doc!:DocumentComponent;
  constructor(private  docService:DocumentService) { 
    
  }

  ngOnInit(): void {
    console.log()
  }

}
