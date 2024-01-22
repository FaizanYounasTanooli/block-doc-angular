import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PageComponent } from './page/page.component';
import DocumentSetup from '../../document-setup';
import { BehaviorSubject } from 'rxjs';
import PageInput from '../../input-modles/page-Input';
import PageSetup from '../../page-setup';
import { DocumentService } from '../../document.service';
import ComponentInput from '../../input-modles/component-input';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, AfterViewInit {
  @Input() pageInputs!:PageInput[];
  @Input() setup:DocumentSetup=new DocumentSetup();
    public get setupSubject(): BehaviorSubject<DocumentSetup> {
        return new BehaviorSubject(this.setup);
    }
  constructor(private docService:DocumentService) { 
    this.pageInputs=docService.documentData.pageInputs;
  }
  ngAfterViewInit(): void {
  }
  public addText()
  {
    this.docService.documentData.pageInputs[0].sectionInputs[0].componentInputs.push(new ComponentInput("Text"))
  }
  addList() {

  }
  ngOnInit(): void {
  }

}
