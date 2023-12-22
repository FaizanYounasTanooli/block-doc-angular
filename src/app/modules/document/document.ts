import { BehaviorSubject } from "rxjs";
import DocumentSetup from "./document-setup";


export default class Document {
    setup!:DocumentSetup;
    public get setupSubject(): BehaviorSubject<DocumentSetup> {
        return new BehaviorSubject(this.setup);
    }
}