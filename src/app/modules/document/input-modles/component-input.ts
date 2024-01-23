export default class ComponentInput {
    componentType:string;
    componentInputs?:any;
    constructor(componentType:string, componentInputs?:any) {
        this.componentType=componentType;
        this.componentInputs=componentInputs;
    }
}