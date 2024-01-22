import { ListComponent } from "../components/document/page/section/component/Childs/list/list.component";
import { TextComponent } from "../components/document/page/section/component/Childs/text/text.component";


export default class ComponentInput {
    componentType:string;
    componentInputs?:any;
    constructor(componentType:string, componentInputs?:any) {
        this.componentType=componentType;
        this.componentInputs=componentInputs;
    }
}