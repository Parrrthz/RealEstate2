// import { useState  } from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import AddProperty from "./pages/AddProperty"
import Listing from "./pages/Listing"
import Booking from "./pages/Booking"
import Favourites from "./pages/Favourites"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './index.css'

export default function App(){
  return(
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/listing" element={<Listing />} />
      <Route path="/addproperty" element={<AddProperty />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
    <Footer />
    {/* <h1>Helloworld!</h1> */}
    </BrowserRouter>
  )
 }
// export default App;
