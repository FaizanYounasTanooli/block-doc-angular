import { Component, OnInit } from '@angular/core';
import Page from '../page';
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
