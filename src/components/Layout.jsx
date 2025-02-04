import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailContext from '../context/userDetailContext';
import { useMutation } from 'react-query';
import {  createUser } from "../utils/api"
import useFavourites from '../hooks/useFavourites';
import useBookings from '../hooks/useBookings';

const Layout = () => {

  useFavourites();
  useBookings();
  
  
   const { isAuthenticated , user , getAccessTokenWithPopup } = useAuth0();
   const { setUserDetails} = useContext(UserDetailContext);
   const {mutate} = useMutation({
    mutationKey : [user?.email],
    mutationFn: (token)=> createUser(user?.email,token),
   });



   ///////////////////////GPT///////////////////////////////////
   useEffect(() => {
    const getTokenAndRegister = async () => {
      try {
        const res = await getAccessTokenWithPopup({
          authorizationParams: {
            audience: "http://localhost:8000",
            scope: "openid profile email",
          },
        });
  
        // Save token to local storage
        localStorage.setItem("access_token", res);
  
        // Update user details if setUserDetails is defined
        if (typeof setUserDetails === "function") {
          setUserDetails((prev) => ({
            ...prev,
            token: res,
          }));
        } else {
          console.error("setUserDetails is not a function");
        }
  
        // Trigger mutation
        mutate(res);
      } catch (error) {
        console.error("Error in getTokenAndRegister:", error);
      }
    };
  
    // Call getTokenAndRegister if user is authenticated
    if (isAuthenticated) {
      getTokenAndRegister();
    }
  }, [isAuthenticated, getAccessTokenWithPopup, setUserDetails, mutate]);

  
  //  useEffect(()=> {

  //     const getTokenAndRegister = async () => {
  //       const res = await getAccessTokenWithPopup({
  //         authorizationParams:{
  //           audience:"http://localhost:8000",
  //           scope:"openid profile email"
  //         },
  //       });
  //     localStorage.setItem("access_token",res);
  //     setUserDetails((prev)=>({ ...prev,token:res}));
  //     // console.log(res)
  //     mutate(res);
  //     };

 

  //     isAuthenticated && getTokenAndRegister()
  //  }, [isAuthenticated])


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