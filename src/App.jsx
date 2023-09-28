import './App.css'
import SearchBar from './components/SearchBar'
import ImageShow from './components/ImageShow'
import data from "../data.js";

function App() {

  return (
    <>
      <SearchBar />
      <ImageShow data={data} />
    </>
  )
}

export default App
