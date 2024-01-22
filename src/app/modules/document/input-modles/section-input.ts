import SectionSetup from "../section-setup";
import ComponentInput from "./component-input";

export default class SectionInput {
    sectionSetup:SectionSetup;
    componentInputs:ComponentInput[];
    constructor(sectionSetup?:SectionSetup,componentInputs?:ComponentInput[]) {
        this.sectionSetup= sectionSetup?? new SectionSetup();
        this.componentInputs=componentInputs?? [];
    }
}