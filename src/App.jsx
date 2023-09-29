import './App.css'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import data from "../data.js";

function App() {

  return (
    <>
      <SearchBar />
      <ImageList data={data} />
    </>
  )
}

export default App
