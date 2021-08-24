import doneVacsin from "./doneVacsin.js";
import Person from "./Person.js";

let $app = document.getElementById('app');

let _person = new Person();

let _doneVacsin = new doneVacsin();

$app.append(_doneVacsin.render());


let $btnvacsin = document.createElement('button');
$btnvacsin.innerHTML = "Click"
$app.appendChild($btnvacsin);

