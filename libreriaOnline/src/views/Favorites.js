import { getBookFavoriteById } from "../services/supabase";
import '../styles/Favorites.css'
export default async function Favorites(){

    let result =""; 
    if(!localStorage.getItem("favorites")){
    localStorage.setItem("favorites", "[]");
}

    if(JSON.parse(localStorage.getItem("favorites")).length!=0){
        result='<div class="tab-pane fade show active" "role="tabpanel" aria-labelledby="kategori1-tab"><div class="row m-0 p-3">';
        const favorites = JSON.parse(localStorage.getItem("favorites"));

        for(let i=0; i<favorites.length;i++){
            let book = await getBookFavoriteById(favorites[i]);
             result += '<div class="col-md-6 col-lg-4"><div class="card h-100"><img src="'+book[0].img+' " class="card-img-top"><div class="card-body d-flex flex-column"><h5 class="card-title">'+book[0].Name+'</h5><p class="fw-light fst-italic">Author: '+book[0].Author+'</p><p class="fw-bold text-primary">'+book[0].Gender.Name+'</p><button onclick="deleteFavorite('+book[0].id+')">💔</button></div></div></div>';
        }
        result+='</div></div>';
    } else{
        result = `<div class="noFavorites-container"><div class="noFavorites-message">No tienes libros favoritos.</div></div>`;
    }

    return `${result}`;
}