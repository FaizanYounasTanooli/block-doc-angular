import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PageComponent } from './page/page.component';
import DocumentSetup from '../../document-setup';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, AfterViewInit {
  @Input() pageInputs:any=[{},{}];
  @Input() setup:DocumentSetup=new DocumentSetup();
    public get setupSubject(): BehaviorSubject<DocumentSetup> {
        return new BehaviorSubject(this.setup);
    }
  page:any=PageComponent;
  constructor() { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
