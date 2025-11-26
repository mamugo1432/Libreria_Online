
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { router } from './router'
import Books from './views/Books'
import './styles/Main.css'

let result = `${Header()}<main id="view"></main>${Footer()}`;

if(window.location.hash=="#/login"){
    result = `<header></header><main id="view"></main>${Footer()}`;}

document.querySelector('#app').innerHTML = result;

router();
window.addEventListener('hashchange', router);
