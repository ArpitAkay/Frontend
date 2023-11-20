interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    public cameraMode: string
    public filter: string
    public burst: number
    constructor(cameraMode: string, filter: string, burst: number) {
        this.cameraMode = cameraMode
        this.filter = filter
        this.burst = burst
    }
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number,
        public short: boolean
    ) {}

    createStory(): void {
        console.log("Story created");
    }
}