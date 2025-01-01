import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../utils/api";

const Property = () => {
  const { pathname } = useLocation();
  
  // console.log(pathname);

  const id = pathname.split("/").slice(-1)[0];

  // console.log(id);

  const { data, isLoading, isError } = useQuery(["resd"], () =>
    getProperty(id))

  // console.log(id)

  return <div>Property</div>;
};

export default Property;
