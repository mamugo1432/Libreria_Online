import {createClient} from '@supabase/supabase-js'
const supabaseUrl = 'https://daqeiozhthuwiofwgxpc.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhcWVpb3podGh1d2lvZndneHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MDIxNjEsImV4cCI6MjA3OTQ3ODE2MX0.vj1SXPRgQUdHnVRDwvnT74_5XNRIrKxrkAL2g-mJPZ4";
const supabase = createClient(supabaseUrl, supabaseKey);

  export async function getAllBooks(){
    const {data} =  await supabase.from("Book").select('img,Name,id, Gender(Name)');
      return data;
  }

  export async function getBookFavoriteById(id){
    const {data} = await supabase.from("Book").select('img,Name,id, Author, Gender(Name)').eq('id',id);
    return data;
  }

  export async function getDetailBook(id){
    const {data} = await supabase.from("Book").select('*, Gender(Name)').eq('id', id);
    return data[0];
  }