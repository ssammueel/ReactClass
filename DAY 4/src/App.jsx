import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Service from './components/Servise'

import Header from './components/Header'

import Image from './components/about/Image'
import Price from './components/about/Price'
import Location from './components/about/Location'
import Refdemo from './components/Refdemo'

function App() {
 
  return (
    <>

    {/* <Refdemo/> */}

     <BrowserRouter>
        <Header/>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}>
        <Route path='image' element={<Image/>}></Route>
        <Route path='price' element={<Price/>}></Route>
        <Route path='location' element={<Location/>}></Route>

      </Route>
      <Route path='/product' element= {<Product/>}/>
      <Route path='/service' element={<Service/>} />

     </Routes>
     
     </BrowserRouter>

    </>
  )
}

export default App
