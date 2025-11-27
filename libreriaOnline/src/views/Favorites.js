import { getBookById } from "../services/supabase";
export default async function Favorites(){

    let result = "<p>No tienes libros favoritos</p>";
    if(JSON.parse(localStorage.getItem("favorites")).length!=0){
        result="";
        const favorites = JSON.parse(localStorage.getItem("favorites"));

        for(let i=0; i<favorites.length;i++){
            let book = await getBookById(favorites[i]);
             result = '<div class="col-md-6 col-lg-4"><div class="card h-100"><img src="'+book[0].img+' " class="card-img-top"><div class="card-body d-flex flex-column"><h5 class="card-title">'+book[0].Name+'</h5><p class="fw-bold text-primary">'+book[0].Gender.Name+'</p><a href="/#/books/'+book[0].id+'" class="btn btn-success mt-auto">See Details</a></div></div></div>';
        }
        /*favorites.map(async favorite =>{
            let book = await getBookById(favorite);
            result = '<div class="col-md-6 col-lg-4"><div class="card h-100"><img src="'+book[0].img+' " class="card-img-top"><div class="card-body d-flex flex-column"><h5 class="card-title">'+book[0].Name+'</h5><p class="fw-bold text-primary">'+book[0].Gender.Name+'</p><a href="/#/books/'+book[0].id+'" class="btn btn-success mt-auto">See Details</a></div></div></div>';
            return result;
        } );*/

        console.log(result)
    }

    return `${result}`;
}