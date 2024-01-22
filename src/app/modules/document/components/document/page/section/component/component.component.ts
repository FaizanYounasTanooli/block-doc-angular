import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ListComponent } from './Childs/list/list.component';
import { TextComponent } from './Childs/text/text.component';
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
    if (this.userCompType=="Text")
    {
      this.userComp= TextComponent as unknown as any
    }
    else if (this.userCompType=="List")
    {
      this.userComp= ListComponent  as unknown as any
    }
  }
  
}
