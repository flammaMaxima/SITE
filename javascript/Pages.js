
import { Application } from './Application.js';

class PagesClass {
    constructor(){
        this.currentURL = new URL(window.location.href);
    }

    get activePage(){
        const params = new URLSearchParams(this.currentURL.search);
        const pageParam = (params.has("page")) ? params.get("page") : Application.page;
        return (Application.pageList.indexOf(pageParam) === -1) ? "error404" : pageParam;
    }

}

const Pages = new PagesClass();

export { Pages }