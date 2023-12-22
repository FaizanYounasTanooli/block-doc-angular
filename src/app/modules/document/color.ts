export default class Color {
    Red:number=255;
    Green:number=255;
    Blue:number=255;
    constructor(Red?:number,Green?:number,Blue?:number) {
        this.Red=Red ?? this.Red;
        this.Green=Green?? this.Green;
        this.Blue=Blue?? this.Blue;
    }
    
}