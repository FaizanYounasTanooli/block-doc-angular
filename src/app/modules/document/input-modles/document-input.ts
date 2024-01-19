import DocumentSetup from "../document-setup";
import PageInput from "./page-Input";

export default interface DocumentInput {
    setup:DocumentSetup,
    pageInputs:PageInput[],
}