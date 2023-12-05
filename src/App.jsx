//funcion principal sobre la cual se montan las funciones de primera linea
//importamos funcion primaria itemlistcontainer
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

//importamos plantilla css 
import './App.css'
//importamos funcion primaria navbar
import NavBar from './Components/NavBar/NavBar'
//importamos para el enrutado
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pestañas principales
import CarWidget from './Components/CarWidget/CarWidget'
import Error from './Components/Error'

function App() {  

  return (
        
    <div className='App'>
      <BrowserRouter>

        <NavBar/>

          <Routes>

            <Route path= {'/'} element={ <ItemListContainer greeting='Listado General' />}/>

            <Route path= {'/categoria/:id'} element={ <ItemListContainer/>}/>
            <Route path= {'/item/:id'} element={ <ItemDetailContainer/>}/>            

            <Route path= {'/carwidget'} element={ <CarWidget/>}/>

            <Route path= {'*'} element={ <Error />}/>

          </Routes>

        </BrowserRouter>
      
    </div>
      
  )
}

export default App
