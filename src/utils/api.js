import axios from "axios";
import dayjs from "dayjs";
import {toast} from "react-toastify";

 export const api =axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 10000,
 });

 export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allresd",{
            timeout:10*1000,
        });
        if(response.status === 400 || response.status === 500){
            throw response.data;
        }
        console.log(response.data);  //log the respose
        return response.data;      // ensure this is  an  array
    } catch (error) {
        toast.error("seomething went wrong");
        throw error;
    }
};

export const getProperty = async(id)=>{
    try {
        const response = await api.get(`/residency/${id}`,{
            timeout:10*1000,
        });
        if(response.status === 400 || response.status === 500){
            throw response.data;
        }
        return response.data;
    } catch (error) {
        toast.error("seomething went wrong");
        throw error;
    }
}

export const createUser =  async(email,token) => {
    try{
        await api.post(`/user/register`, {email},{
            headers:{
                Authorization:`Bearer${token}`
            }
        })

    }catch(error){
        toast.error("Something went wrong, please try again")
        throw error
    }
};

// export const bookVisit = async (date, propertyId, email, token)=>{
//     try {
//         await api.post(`/user/bookVisit/${propertyId}`,{
//             email,
//             id: propertyId,
//             date:dayjs(data).format("DD/MM/YYYY")
//         },
//     {
//         headers:{
//             Authorization:`Bearer${token}`
//         }
//     })
//     } catch (error) {
//        toast.error("Something went wrong,try again please") 
//        throw error
//     }
// }



// import api from './api'; // Ensure this is the correct import for your `api` instance.


// export const bookVisit = async (date, propertyId, email, token) => {
//     if (!token) {
//       throw new Error('Token is missing. Please log in again.');
//     }
  
//     try {
//       // Format the date using dayjs
//       const formattedDate = dayjs(date).format('DD/MM/YYYY');
  
//       // Send POST request to API
//       const response = await axios.post(
//         `http://localhost:8000/api/user/bookVisit/${propertyId}`,
//         {
//           email,
//           id: propertyId,
//           date: formattedDate,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in Authorization header
//           },
//         }
//       );
  
//       // Show success notification
//       toast.success('Booking confirmed successfully!', {
//         position: 'bottom-right',
//       });
  
//       return response.data; // Return data if needed
//     } catch (error) {
//       // Log and handle errors
//       console.error('Error booking visit:', error.response?.data || error.message);
//       toast.error(
//         error.response?.data?.error || 'Something went wrong. Please try again.',
//         {
//           position: 'bottom-right',
//         }
//       );
//       throw error;
//     }
//   };
/////////////////////////////////////////////////////////

export const bookVisit = async (value, propertyId, email, token) => {
  console.log("Token:", token); // Add this line
  if (!token) throw new Error("Token is missing. Please log in again.");
  const response = await axios.post(
    `${BASE_URL}/api/user/bookVisit`,
    {
      date: value,
      propertyId,
      email,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};




  export const removeBooking = async(id, email, token)=>{
    try {
      await api.post(`/user/removeBooking/${id}`)
    } catch (error) {
      toast.error("something went wrong ,try again please")
      throw error
    }
  }




// favourites api for user
  export const tofav = async (id, email, token)=>{
   try {
    await api.post(
      `/user/tofav/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
   } catch (error) {
    throw error;
   }
  }



  // get all favourites properties 

  export const getAllFav = async (email,token)=>{
    if(!token) return
    try {
      
      const res = await api.post (`/user/allFav/`,{
        email
        },
      {
        headers:{
          Authorization: `Bearer ${token}`
        },
      });

      // console.log(res)

      return res.data["favResidenciesID"];
    } catch (e) {
      toast.error("something went wrong while fetching favs")
      throw e;
    }
  }


   // get all favourites properties 

   export const getAllBookings = async (email,token)=>{
    if(!token) return
    try {
      
      const res = await api.post (`/user/allBookings/`,{
        email,
        },
      {
        headers:{
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("res",res)

      return res.data["bookedVisits"];
    } catch (error) {
      toast.error("something went wrong while fetching bookings")
      throw error;
    }
  }