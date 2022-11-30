import { Pages } from "./Pages.js";

if(Pages.activePage === "pocetna"){

    fetch("./templates/pocetna.html")
        .then( (response) => response.text() )
        .then( (data) => document.querySelector("main").innerHTML = data)
        .then( onReady );

    function onReady(){
        setInterval(()=>{
			let old = document.querySelector('.slajd.prikaz');
			let currentIndex = Number(old.getAttribute("index"));
			let nextIndex = (currentIndex === 2) ? 0 : currentIndex + 1;
			old.className = 'slajd';
			document.querySelector(`.slajd[index="${nextIndex}"]`).className = 'slajd prikaz';
		}, 5000);
    }
}
