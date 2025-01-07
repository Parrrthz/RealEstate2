import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailContext from '../context/userDetailContext';
import { useMutation } from 'react-query';
import {  createUser } from "../utils/api"

const Layout = () => {

   const { isAuthenticated , user , getAccessTokenWithPopup } = useAuth0();
   const { setUserDetails} = useContext(UserDetailContext);
   const {mutate} = useMutation({
    mutationKey = [user?.email],
    mutationFn: ()=> createUser(user?.email)
   })

   useEffect(()=> {
      isAuthenticated && mutate()
   }, [isAuthenticated])


  return (
    <>
    <div>
        <Header />
        <Outlet />
    </div>
    <Footer />
    </>
  );
};

export default Layout;