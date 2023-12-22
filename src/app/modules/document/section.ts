import { BehaviorSubject } from "rxjs";
import Document from "./document";
import SectionSetup from "./section-setup";
export default class Section {
    document:Document=new Document();
    setup:SectionSetup=this.document.setup;

    public get setupSubject(): BehaviorSubject<SectionSetup> {
        return new BehaviorSubject(this.setup);
    }
}