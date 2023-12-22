import { BehaviorSubject } from "rxjs";
import Document from "./document";
import Orientation from "./orientation.enum";
import Margin from "./margin";
export default class Section {
    document!:Document;
    public margin:Margin= this.document.margin;
    public orientation:Orientation=this.document.orientation;    
    public get marginsSubject(): BehaviorSubject<Margin> {
        return new BehaviorSubject(this.margin);
    }
}