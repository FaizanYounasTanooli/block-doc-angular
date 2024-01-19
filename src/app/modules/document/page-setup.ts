import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import Margin from "./margin";
import Orientation from "./orientation.enum";
import Color from "./color";
import DocumentSetup from "./document-setup";

export default class PageSetup extends DocumentSetup {
    public margin:Margin= new Margin(1,1,1,1);
    public orientation:Orientation=Orientation.Potrait;
    public color:Color = new Color();
    // constructor(margins:Margin,orientation:Orientation){
    //     this.margin=margins;
    //     this.orientation=orientation;
    // }
}