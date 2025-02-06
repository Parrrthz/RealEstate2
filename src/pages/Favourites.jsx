import React, { useContext, useState } from "react";
import Searchbar from "../components/Searchbar";
// import {PROPERTIES} from '../constant/data.jsx'
import Item from "../components/Item";
import useProperties from "../hooks/useProperties.jsx";
import { PuffLoader } from "react-spinner";
import '../constant/data.jsx'
import UserDetailContext from "../context/userDetailContext.js";

const Favourites = () => {
  const { data=[], isError, isLoading } = useProperties();
  // console.log(data)
  const [filter, setFilter] =  useState("");
  const {userDetails: {favourites}} = useContext(UserDetailContext)
  

  // if (isError) {
  //   return (
  //     <div>
  //       <span>Error While Fetching Data</span>
  //     </div>
  //   );
  // }
  // if (isLoading) {
  //   return (
  //     <div className="h-64 flexCenter">
  //       <PuffLoader
  //         height="80"
  //         width="80"
  //         radius={1}
  //         color="#555"
  //         aria-Label="puff-loading"
  //       />
  //     </div>
  //   );
  // }

  return (
    <main className="max-pad-container my-[99px]">
      <div className="max-pad-container py-10 xl:py22 bg-primary rounded-3xl">
        <div>
          <Searchbar filter={filter} setFilter={setFilter} />
          {/* container */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10">
            {/* {data.map((property) => (
              <Item key={property.title} property={property} />
            ))} */}
             {Array.isArray(data) && data.length > 0 ? (
          data
            .filter((property)=> favourites.include(property.id))
            .filter((property)=>
            property.title.toLowerCase().include(filter.toLowerCase()) ||
            property.city.toLowerCase().include(filter.toLowerCase()) ||
            property.country.toLowerCase().include(filter.toLowerCase())
           )
             .map((property) => (
            <Item key={property.title} property={property} />
          ))
        ) : (
          <p>No properties found or still loading...</p>
        )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Favourites;