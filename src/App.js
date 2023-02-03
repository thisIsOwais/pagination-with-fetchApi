import react from 'react'
import Stories from './components/Stories.js'
import Search from './components/Search.js'
import Pagination from './components/Pagination.js'
import "./App.css"

const App=()=> {
  
  return (
    <>
    <div>Welcome to Owais Technical News Website</div>
<Search/>
<Pagination/>
  <Stories/>
  </>
  );
}

export default App;
