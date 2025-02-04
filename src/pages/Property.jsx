import React, { useContext, useState } from "react";
import { isError, useMutation, useQuery } from "react-query";
import { Links, useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../utils/api";
// import {PuffLoader} from 'react-spinners';
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from 'react-icons/md';
import HeartBtn from "../components/HeartBtn.jsx";
// import {Cgruler} from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import Map from "../components/Map.jsx";
import useAuthCheck from "../hooks/useAuthCheck.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../components/BookingModal.jsx";
import UserDetailContext from "../context/userDetailContext.js";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";


const Property = () => {
  const { pathname } = useLocation();
  
  // console.log(pathname);

  const id = pathname.split("/").slice(-1)[0];

  // console.log(id);

  const { data, isLoading, isError } = useQuery(["resd"], () =>
    getProperty(id));

  console.log(data)

  const [modalOpened,setModalOpened] = useState(false);
  const {validateLogin} = useAuthCheck();
  const {user} = useAuth0();


  const {
    userDetails:{token,bookings},
    setUserDetails} = useContext(UserDetailContext);

  
const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
  mutationFn: () => removeBooking(id, user?.email, token),
  onSuccess: () => {
    setUserDetails((prev) => ({
      ...prev,
      bookings: prev.bookings.filter((booking) => booking?.id !== id),
    }));
    toast.success("Booking cancelled successfully!",{position: "bottom-right"});
  },
});

//   if(isLoading){
//   return( 
//     <div className="h-64 flexCenter">
//       <PuffLoader
//       height = "80"
//       width = "80"
//       radius = "{1}"
//       color = "#555"
//       aria-label = "puff-loading"
//       />
//     </div>
//   );
// }

// if(isError){
//   return <div className="h-64 flexCenter">Error While Fetching Data</div>;
// }
 
 return(
  <section className="max-padd-container my-[90px]">
   <div className="pb-2 relative">
            <img src={data?.image} alt={data?.title} className="rounded-xl max-h-[27rem]  self-center w-full object-cover"/>
            {/* like btn */}
            <div className='absolute top-4 right-6'>
                <HeartBtn id={id}/>
            </div>
        </div>
        {/* container */}
        <div className="xl:flexBetween gap-8">
          {/* leftside */}
          <div className="flex-1">
        <h5 className="bold-16 my-1 text-secondary">{data?.city}</h5>
        <div className="flexBetween">
        <h4 className="medium-18 line-clamp-1">{data?.title}</h4>
        <div className="bold-20">${data?.price}.00</div>
        </div>
        {/* info */}
        <div className='flex gap-x-4 py-2'>
            <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineBed /> {data?.facilities.bedrooms}</div>
            <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineBathtub /> {data?.facilities.bathrooms}</div>
            <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineGarage /> {data?.facilities.parkings}</div>
            <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineGarage />
            {/* <CgRuler />  */}
            </div> 400
        </div>
        <p className="pt-2 mb-4">{data?.description}</p>
        <div className="flexStart gap-x-2 my-9">
          <FaLocationDot />
          <div>
            {data?.address} {data?.city} {data?.country}
          </div>
        </div>
        <div className='flexBetween'>
            
            {bookings?.map((bookings)=>bookings.id).includes(id) ? (<>
            <Button onClick={()=>cancelBooking()}
            variant="outline"
            w={"100%"}
            color="red"
            disabled={cancelling}
            >
              Cancel Booking
            </Button>
            <p className="text-red-500 medium-15 ml-3">
              You've already booked visit for {bookings?.filter((booking)=> booking?.id === id)[0].date}
            </p>
              </>
              ) : (
              <button onClick={()=>{
              validateLogin() && setModalOpened(true);
            }} 
            className='btn-secondary rounded-xl !py-[7px] !px-5 shadow-sm w-full'>Book The Visit</button>)}

            <BookingModal
            opened = {modalOpened}
            setOpened = {setModalOpened}
            propertyId={id}
            email={user?.email}
            />
        </div>
      </div>
      {/* rightside */}
      <div className="flex-1">
         <Map address={data?.address} city={data?.city} country={data?.country} />
      </div>
    </div>
  </section>
 )
};
export default Property;