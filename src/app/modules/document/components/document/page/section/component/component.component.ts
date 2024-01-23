import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SectionComponent } from '../section.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss'
})
export class ComponentComponent implements OnInit {
  
  @Input() editMod=true;
  @Input() userCompType!:string;
  @Input() userComp!:any;
  @Input() inputs!:any;
  section!:SectionComponent;
  
  ngOnInit(): void {
  }
  
}
