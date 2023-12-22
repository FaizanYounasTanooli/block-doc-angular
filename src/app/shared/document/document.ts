export default class Document {
    public marginTop: number = 1;
    public marginBottom: number = 1;
    public marginLeft: number = 1;
    public marginRight: number = 1;
    public get margins(): number[] {
        return [this.marginTop, this.marginRight, this.marginBottom, this.marginLeft];
    }
}