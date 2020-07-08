export class File{

    public file: File;
    public name : string;
    public url : string;
    public isLoad: boolean;
    public progress: number;

    constructor(file:File){
        this.file = file;
        this.name = file.name;
        this.isLoad = false;
        this.progress = 0;
    
    }

    
}