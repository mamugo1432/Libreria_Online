
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { router } from './router'
import Books from './views/Books'
import './styles/Main.css'
let result = `${Header()}<main id="view"></main>${Footer()}`;



/*if(window.location.hash=="#/login"){
    result = `<header></header><main id="view"></main>${Footer()}`;}*/

    window.deleteFavorite = function(id){
        if(localStorage.getItem("favorites")){
            let favorites = JSON.parse(localStorage.getItem("favorites"));
            favorites = favorites.filter(favorite => favorite != id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
        router();
    }

    window.addFavorites = function(id){
          if(localStorage.getItem("favorites")){
            let favorites = JSON.parse(localStorage.getItem("favorites"));
            favorites.push(parseInt(id));
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }

document.querySelector('#app').innerHTML = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">' + result;

router();
window.addEventListener('hashchange', router);


