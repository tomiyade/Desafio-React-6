import NavBar from "./components/NavBar";
import React from 'react'
import "./app/style.css"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer"


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemCount />
      <ItemDetailContainer />
    </div>
  )
}


export default App;
