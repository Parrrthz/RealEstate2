import axios from "axios";
import dayjs from "dayjs";
import {toast} from "react-toastify";

 export const api =axios.create({
    baseURL: 'http://localhost:8000/api'
 })

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

export const bookVisit = async (date, propertyId, email, token)=>{
    try {
        await api.post(`/user/bookVisit/${propertyId}`,{
            email,
            id: propertyId,
            date:dayjs(data).format("DD/MM/YYYY")
        },
    {
        headers:{
            Authorization:`Bearer${token}`
        }
    })
    } catch (error) {
       toast.error("Something went wrong,try again please") 
       throw error
    }
}

// import dayjs from 'dayjs';
// import { toast } from 'react-toastify';
// import api from './api'; // Ensure this is the correct import for your `api` instance.

// export const bookVisit = async (date, propertyId, email, token) => {
//   try {
//     await api.post(
//       `/user/bookVisit/${propertyId}`,
//       {
//         email,
//         id: propertyId,
//         date: dayjs(date).format('DD/MM/YYYY'), // Corrected the variable name.
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`, // Added a space after "Bearer".
//         },
//       }
//     );
//     toast.success('Booking confirmed successfully!', { position: 'bottom-right' });
//   } catch (error) {
//     toast.error('Something went wrong, please try again.', { position: 'bottom-right' });
//     throw error;
//   }
// };

