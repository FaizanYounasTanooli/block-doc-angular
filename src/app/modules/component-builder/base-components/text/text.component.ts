import { Component, Input, ViewContainerRef, inject } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  
  vcr = inject(ViewContainerRef);
  @Input() text:string=""
}
