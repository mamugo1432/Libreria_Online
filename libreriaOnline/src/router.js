import NotFound from './views/NotFound.js';
import Books from './views/Books.js';
import Login from './views/Login.js';
import BookDetail from './views/BookDetail.js';
import Favorites from './views/Favorites.js';
export async  function router() {
    const view = document.getElementById('view');
    const route = location.hash.slice(1).toLowerCase() || '/';
    const parts = route.split("/"); 
    const routes = {
      '/': Books,
      '/favorites': Favorites,
      '/login':Login,
};

    if(parts[1]=="books"){
        const id = parts[2];
        view.innerHTML = BookDetail(id);
        return;
    }

    const screen = routes[route] || NotFound;
    view.innerHTML =await screen();
}