import './App.css'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import Tile from './components/Tile'
import { useState, useEffect } from 'react';
import getPhotos from './unsplash-request.js';

function App() {

  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  const queryHandler = (event, term) => {
    setQuery(term);
    console.log("From App inside the queryHandler, here's the search term: ", term);
  }

  useEffect(() => {
    // Each time the query term updates, call the API and store the results in 'photos'.
    async function apiCall(){
      // getPhotos uses Axios to make the API call
      const thePhotos = await getPhotos(query);
      setPhotos(thePhotos);
    }
    apiCall()
  }, [query]);

  console.log("From App, here's the search query after it's been set: ", query);

  return (
    <>
      <SearchBar queryHandler={queryHandler} />
      <section className='tile is-ancestor' style={{width:"50%"}}>
        <div className='tile is-parent'>
          <ImageList photos={photos} />
        </div>
      </section>
      <Tile />
    </>
  )
}

export default App
