// import React, { useContext, useEffect } from 'react'
// import UserDetailContext from '../context/userDetailContext';
// import { useQuery } from 'react-query';
// import { getAllFav } from '../utils/api';

// const useFavourites = () => {
//     const { userDetails, setUserDetails } = useContext(UserDetailContext);
//     const querRef  = useRef();
//     const {data, isLoading, isError, refetch} = useQuery({
//         queryKey: "allFavourites",
//         queryFn: () =>getAllFav(user?.email, userDetails?.token),
//         onSuccess: (date)=>setUserDetails((prev)=>({...prev,favourites: date})),
//         enabled: user !== undefined,
//         staleTime: 30000
//     });

//     querRef.current = refetch;

//     useEffect(()=>{
//         queryRef.current && queryRef.current();
//     },[userDetails?.token])

//   return {data, isError, isLoading, refetch}
// };

// export default useFavourites



import React, { useContext, useEffect, useRef } from 'react';
import UserDetailContext from '../context/userDetailContext';
import { useQuery } from 'react-query';
import { getAllFav } from '../utils/api';

const useFavourites = () => {
    const { userDetails, setUserDetails } = useContext(UserDetailContext);
    const querRef = useRef(); // ✅ useRef is now correctly imported
    const user = userDetails?.user; // ✅ Define 'user' from context if needed

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["allFavourites"],
        queryFn: () => getAllFav(user?.email, userDetails?.token),
        onSuccess: (date) => setUserDetails((prev) => ({ ...prev, favourites: date })),
        enabled: !!user, // ✅ Ensure query only runs if user exists
        staleTime: 30000
    });

    querRef.current = refetch; // ✅ Assign refetch correctly

    useEffect(() => {
        querRef.current && querRef.current(); // ✅ Corrected from queryRef to querRef
    }, [userDetails?.token]);

    return { data, isError, isLoading, refetch };
};

export default useFavourites;
