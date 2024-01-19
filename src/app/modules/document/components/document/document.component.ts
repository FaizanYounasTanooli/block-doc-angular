import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PageComponent } from './page/page.component';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, AfterViewInit {
  @Input() PageInputs:any=[{},{}];
  page:any=PageComponent;
  constructor() { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
