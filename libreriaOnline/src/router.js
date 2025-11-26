import NotFound from './views/NotFound.js';
import AboutMe from './views/AboutMe.js';
import Books from './views/Books.js';
import Login from './views/Login.js';

export async  function router() {
    const view = document.getElementById('view');
    const route = location.hash.slice(1).toLowerCase() || '/';
    const routes = {
      '/': Books,
      '/aboutme': AboutMe,
      '/login':Login,
};
    const screen = routes[route] || NotFound;
    view.innerHTML =await screen();
}