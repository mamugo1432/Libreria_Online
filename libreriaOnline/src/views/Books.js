import { getAllBooks } from '../services/supabase';
import './../styles/Books.css'

export default async function Books(){

    const books  = await getAllBooks();
    let count=1;


    return `
    <div class=parent>

    ${
    books.map( book => {
        console.log(book.Name);
        const returned = '<div class="div'+count+'"> <p>'+book.Name+'</p> </div>';
        count++;
        return returned;
    }).join("")
    }

    </div>
    
    `;


}