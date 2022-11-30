import { Pages } from "./Pages.js";

if(Pages.activePage === "pocetna"){

    fetch("./templates/pocetna.html")
        .then( (response) => response.text() )
        .then( (data) => document.querySelector("main").innerHTML = data)
        .then( onReady );

    function onReady(){
        console.log("Events added")
    }
}
