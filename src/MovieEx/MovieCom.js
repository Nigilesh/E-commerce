import React, {useState} from 'react';
  function SearchMovies(){
    const [searching, setSearching] = useState(false);
    const [message, setMessage] = useState(null);
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const searchMovies = async(e) =>{
        e.preventDefault();
        setSearching(true);
      

        const url =`http://www.omdbapi.com/?&apikey=ac5a571b&s=${query}`;
         try{
            const response = await fetch(url);
            const data = await response.json();
            setMessage(null);
            setMovies(data.Search);
            setSearching(false);
         }catch(err){
            setMessage('An unexpected error occured.')
            setSearching(false);
         }
    }
    return (
        <center>
        <div >
           <div>
           <form  onSubmit={searchMovies}>
             <input type="text"  placeholder="Search movies by name..."
                    onChange={(d) =>setQuery(d.target.value)}/>
             <button type="submit" class="button"> Search  </button>
           </form>
         </div>
    
         <div >{searching && !message ? ( <span> loading... </span>): message ? ( <div > {message} </div>): (movies.map(movie => ( 
            <div >
                <div >
                  <div key={movie.imdbID}>
                  <br></br>
                  <img src={movie.Poster} alt="movieimage"/>
                  <table border={1} >
                    <tr>
                     <th>Title:</th> 
                     <th>Year of Release: </th>
                     <th>Type: </th>
                     </tr>
                   <tr>
                     <td>{movie.Title}</td>
                     <td><center>{movie.Year}</center></td>
                     <td>{movie.Type}</td>
                   </tr>
                     </table><br></br>
                       </div>
                        </div>
                      </div> 
                    )))}
                </div>
               
            </div>
           
            </center>
        )
         }
         export default SearchMovies;