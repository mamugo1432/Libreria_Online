import {getDetailBook} from '../services/supabase.js'

export default async  function BookDetail(id){

    const book  = await getDetailBook(id);

    const result = '<div class="container py-5">'+
    '<div class="row">'+
        
        '<div class="col-md-6 order-md-2">'+
             '<img src="'+book.img+'" class="img-fluid"></img>'+
        '</div>'+
        
         '<div class="col-md-6 order-md-1">'+
            '<h1 class="h2 mb-3">'+book.Name+'</h1>'+            

            '<p class="mb-4">'+book.Description+'</p>'+
            '<p class="mb-4 fw-light fst-italic">Author: '+book.Author+'</p>'+
            '<p class="mb-4 fw-light fst-italic">ReleaseDate: '+book.ReleaseDate+'</p>'+
            '<p class="mb-4 fw-bold text-primary">'+book.Gender.Name+'</p>'+

            '<div class="d-grid">'+
                '<button class="btn btn-outline-secondary" type="button" onclick="addFavorites('+book.id+')">'+
                    '<i class="far fa-heart me-2"></i>Add to Favorites'+
                '</button>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'


    return result;
}


