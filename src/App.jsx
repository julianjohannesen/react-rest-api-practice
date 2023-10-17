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

  return (
    <div className="app">
      <SearchBar queryHandler={queryHandler} />
      <section className=''>
        <div className='gallery'>
          <ImageList photos={photos} />
        </div>
      </section>
    </div>
  )
}

export default App
