class ApplicationClass {
    constructor(){
        this.page = "pocetna";
        this.pageList = ["pocetna", "error404", "ove-sezone", "o-nama"];
    }
}

const Application = new ApplicationClass();

export { Application };