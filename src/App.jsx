import './App.css'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import { useState, useEffect } from 'react';
import fetchIt from './unsplash-request.js';

function App() {

  const [query, setQuery] = useState("cats");
  const [photos, setPhotos] = useState([{}]);

  useEffect(() => {
    setPhotos(fetchIt("cats"))  ; //!change this to query
  }, [query]);

  console.log("From App at the end of useEffect here are the photos: ", photos);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <ImageList photos={photos} />
    </>
  )
}

export default App
