import { Component, OnInit } from '@angular/core';
import Page from '../../../modules/document/page';
import Margin from 'src/app/modules/document/margin';
import PageSizes from 'src/app/modules/document/page-size';
import Section from 'src/app/modules/document/section';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent extends Page implements OnInit {
  
  constructor() {
    super();
   }

  ngOnInit(): void {

  }

}
