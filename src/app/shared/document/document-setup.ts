import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import Margin from "./margin";
import Orientation from "./orientation.enum";

export default class DocumentSetup {
    public margin:Margin= new Margin(1,1,1,1);
    public orientation:Orientation=Orientation.Potrait;
    public get marginSubject(): BehaviorSubject<Margin> {
        return new BehaviorSubject(this.margin);
    }
}