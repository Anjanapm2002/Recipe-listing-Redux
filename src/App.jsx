import { Route,Routes } from 'react-router-dom'
import './App.css'
import Start from './pages/Start'
import Home from './pages/Home'
import View from './pages/View'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Start/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/:id/View' element = {<View/>}/>


      </Routes>
    </>
  )
}

export default App
