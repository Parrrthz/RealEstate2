// import { useState  } from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import Listing from "./pages/Listing";
import Booking from "./pages/Booking";
import Favourites from "./pages/Favourites";
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import './index.css'
import { Suspense, useState } from "react";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools} from "react-query/devtools"
import 'react-toastify/dist/ReactToastify.css';
import Property from "./pages/Property";
import UserDetailContext from "./context/userDetailContext"

export default function App(){
  
  const queryClient = new QueryClient();
  const [userDetails , setuserDetails] = useState({
    Favourites: [],
    bookings : [],
    token : null,
  })

  return(
  <UserDetailContext.Provider value={{userDetails , setuserDetails}}>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Suspense fallback={<div>Loading data...</div>}>
    {/* <Header /> */}
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />}/>
      <Route path="/listing">
         <Route index element={<Listing />}/>
         <Route path=":PropertyId" element={<Property />} />
      </Route>
      <Route path="/addproperty" element={<AddProperty />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/favourites" element={<Favourites />} />
      </Route>
    </Routes>
    {/* <Footer /> */}
    </Suspense>
    </BrowserRouter>
    <ToastContainer />
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </UserDetailContext.Provider>
  );
 }
// export default App;
