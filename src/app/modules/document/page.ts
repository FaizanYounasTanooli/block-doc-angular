import Section from "./section";
import Document from "./document";
import Child from "./child";
export default class Page extends Child {
    section:Section = new Section();
}