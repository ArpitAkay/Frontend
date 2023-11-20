abstract class TakePhoto2 {
    constructor(
        public cameraMode: string, 
        public filter: string
    ) {}

    abstract getSepia(): void

    getReelTime(): number {
        return 10;
    }
}

class Instagram1 extends TakePhoto2 {
    constructor(
        public cameraMode: string, 
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    public getSepia(): void {
        console.log("Sepia");
    }
}

const photo = new Instagram1("portrait", "vintage", 3);