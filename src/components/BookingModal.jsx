import React, { useContext, useState } from 'react'
import {Modal,Button} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import { useMutation } from 'react-query';
import UserDetailContext from '../context/userDetailContext';
import { bookVisit } from '../utils/api';

const BookingModal = ({opened, setOpened, email, propertyId}) => {

    const [value,setValue] = useState(null);
    const {userDetails:{token}} = useContext(UserDetailContext)
    console.log(token)


    const {mutate, isLoading} = useMutation({
        mutationFn:()=>bookVisit(value, propertyId, email, token),
    });

  return (
    <Modal
    opened = {opened}
    setOpened={setOpened}
    title="Select Your date to Visit"
    centered
    onClose={()=>setOpened(false)}>
       <div className="flexCenter flex-col gap-4">
         <DatePicker value={value} onChange={setValue} minDate={new Date()} />
         <Button disabled={!value} onClick={()=> mutate()}>Book Visit</Button>
       </div>
    </Modal>
  )
}

export default BookingModal;


// import React, { useContext, useState } from 'react';
// import { Modal, Button } from '@mantine/core';
// import { DatePicker } from '@mantine/dates';
// import { useMutation } from 'react-query';
// import UserDetailContext from '../context/userDetailContext';
// import { bookVisit } from '../utils/api';

// const BookingModal = ({ opened, setOpened, email, propertyId }) => {
//   const [value, setValue] = useState(null);
//   const { userDetails} = useContext(UserDetailContext);

//   const token = userDetails?.token;
//   if (!token) {
//     console.error("Token is required but not available.");
//     return null;
//   }

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () => bookVisit(value, propertyId, email, token),
//     onSuccess: () => {
//       alert('Booking successful!');
//       setOpened(false);
//     },
//     onError: (error) => {
//       console.error("Booking failed:", error);
//       alert('Failed to book the visit. Please try again.');
//     },
//   });

//   return (
//     <Modal
//       opened={opened}
//       onClose={() => setOpened(false)}
//       title="Select Your Date to Visit"
//       centered
//     >
//       <div className="flexCenter flex-col gap-4">
//         <DatePicker 
//           value={value} 
//           onChange={setValue} 
//           minDate={new Date()} 
//           disabled={isLoading}
//         />
//         <Button 
//           disabled={!value || isLoading} 
//           onClick={() => mutate()}
//           loading={isLoading}
//         >
//           Book Visit
//         </Button>
//       </div>
//     </Modal>
//   );
// };

// export default BookingModal;
