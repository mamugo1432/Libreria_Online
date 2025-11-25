
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { router } from './router'
import Books from './views/Books'
import './styles/Main.css'

document.querySelector('#app').innerHTML = `
${Header()}
<main id="view"></main>
${Footer()}
`;

router();
window.addEventListener('hashchange', router);
