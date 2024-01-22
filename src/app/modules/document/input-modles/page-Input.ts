import PageSetup from "../page-setup";
import SectionInput from "./section-input";

export default class PageInput {
    pageSetup:PageSetup;
    sectionInputs:SectionInput[];
    
    constructor(pageSetup?:PageSetup,sectionInputs?:SectionInput[])
    {
        this.pageSetup=pageSetup ?? new PageSetup();
        this.sectionInputs=sectionInputs ?? [new SectionInput()];
    }


}