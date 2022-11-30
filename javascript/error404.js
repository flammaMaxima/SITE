import { Pages } from "./Pages.js";

if(Pages.activePage === "error404"){
    fetch("./templates/error404.html")
    .then( (response) => response.text() )
    .then( (data) => document.querySelector("main").innerHTML = data)
}