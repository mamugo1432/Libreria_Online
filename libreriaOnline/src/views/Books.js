import { getAllBooks } from '../services/supabase';
import './../styles/Books.css'

export default async function Books(){

    const books  = await getAllBooks();



    return `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <div class="tab-pane fade show active" id="kategori1-produk" role="tabpanel" aria-labelledby="kategori1-tab">
            <div class="row g-4">

    ${
    books.map( book => {
       
        const returned = '<div class="col-md-6 col-lg-4"><div class="card h-100"><img src="'+book. img+' " class="card-img-top"><div class="card-body d-flex flex-column"><h5 class="card-title">'+book.Name+'</h5><p class="fw-bold text-primary">'+book.Gender.Name+'</p><a href="#" class="btn btn-success mt-auto">Beli Sekarang</a></div></div></div>';
        return returned;
    }).join("")
    }

    </div>
    
    `;


}