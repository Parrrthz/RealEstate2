  import React from "react";
  import Searchbar from "../components/Searchbar";
  // import {PROPERTIES} from '../constant/data.jsx'
  import Item from "../components/Item";
  import useProperties from "../hooks/useProperties.jsx";
  import { PuffLoader } from "react-spinner";
  import '../constant/data.jsx'

  const Listing = () => {
    const { data, isError, isLoading } = useProperties();
    console.log(data)

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
      <main className="max-padd-container my-[99px]">
        <div className="max-padd-container py-10 xl:py22 bg-primary rounded-3xl">
          <div>
            <Searchbar />
            {/* container */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10">
              {data.map((property) => (
                <Item key={property.title} property={property} />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  };

  export default Listing;






//   import React from "react";
//   import Searchbar from "../components/Searchbar";
//   import Item from "../components/Item";
//   import useProperties from "../hooks/useProperties";
//   import { PuffLoader } from "react-spinner";
// import { PROPERTIES } from "../constant/data";
  
//   const Listing = () => {
//     const { data, isError, isLoading } = useProperties();
  
//     // if (isError) {
//     //   return (
//     //     <div>
//     //       <span>Error while fetching data</span>
//     //     </div>
//     //   );
//     // }
  
//     // if (isLoading) {
//     //   return (
//     //     <div className="h-64 flex justify-center items-center">
//     //       <PuffLoader height={80} width={80} radius={1} color="#555" aria-label="puff-loading" />
//     //     </div>
//     //   );
//     // }
  
//     return (
//       <main className="max-padd-container my-[99px]">
//         <div className="max-padd-container py-10 xl:py-22 bg-primary rounded-3xl">
//           <Searchbar />
//           <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10">
//             {PROPERTIES.map((property) => (
//               <Item key={property.title} property={property} />
//             ))}
//           </div>
//         </div>
//       </main>
//     );
//   };
  
//   export default Listing;
  

