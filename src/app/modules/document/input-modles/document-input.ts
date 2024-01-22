import DocumentSetup from "../document-setup";
import PageInput from "./page-Input";

export default class DocumentInput {
    setup:DocumentSetup;
    pageInputs:PageInput[];
    constructor(setup?:DocumentSetup,pageInputs?:PageInput[])
    {
        this.setup=setup ?? new DocumentSetup();
        this.pageInputs= pageInputs ?? [new PageInput()];
    }
}