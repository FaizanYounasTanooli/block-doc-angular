import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../../modules/document/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  
  constructor(private docService: DocumentService) { }

  ngOnInit(): void {
  }

}
