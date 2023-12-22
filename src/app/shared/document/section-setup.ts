import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import Margin from "./margin";
import Orientation from "./orientation.enum";

export default class SectionSetup {
    public margin:Margin= new Margin(1,1,1,1);
    public orientation:Orientation=Orientation.Potrait;
    // constructor(margins:Margin,orientation:Orientation){
    //     this.margin=margins;
    //     this.orientation=orientation;
    // }
}