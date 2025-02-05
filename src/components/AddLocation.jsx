// import React from 'react'
// import { useForm } from "@mantine/form"
// import { validateString } from '../utils/common'
// import useCountries from '../hooks/useCountries'

// const AddLocation = ({propertyDetails, setPRopertyDetails}) => {
//     const {getAll} = useCountries();
//    const form = useForm({
//     initialValues: {
//         country: propertyDetails?.country,
//         city: propertyDetails?.city,
//         address: propertyDetails?.address,
//      },
//      validate:{
//         country: (value) => validateString(value),
//         city: (value) => validateString(value),
//         address: (value) => validateString(value)
//      }
// })

//    const {city, country, address} = form.values;
//    return (
//     <form action="">
//         {/* left */}
//         <div>
//             {/* input */}
//             <div>
//                 <select
//                 w={"100%"}
//                 withAsterisk
//                 label="Country"
//                 clearable
//                 searchable
//                 data={getAll()}
//                 {
//                     ...form.getInputProps("country", {type: " input"})
//                 }
//                 />
//             </div>
//         </div>
//         {/* right */}
//     </form>
//   )
// }

// export default AddLocation;



////////////////////////////////GPT//////////////////////////////////////

import React from 'react';
import { useForm } from "@mantine/form";
import { validateString } from '../utils/common';
import useCountries from '../hooks/useCountries';
import { Button, Group, Select, TextInput } from '@mantine/core'; // Ensure Mantine is properly imported
import Map from './Map';

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
    const { getAll } = useCountries();

    const form = useForm({
        initialValues: {
            country: propertyDetails?.country || '',
            city: propertyDetails?.city || '',
            address: propertyDetails?.address || '',
        },
        validate: {
            country: (value) => validateString(value),
            city: (value) => validateString(value),
            address: (value) => validateString(value),
        },
    });
    
    const {country, city, address} = form.values;

    const handleSubmit = () =>{
        const {hasErrors} = form.validate();
        if(!hasErrors){
            setPropertyDetails((prev)=> ({...prev, country, city, address}));
            nextStep();
        }
    }
    return (
        <form 
        onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit();
        }}
        >
            <div className="flexCenter">
            {/* Left Section */}
            <div>
                {/* Input Field */}
                <div  className="flexCenter flex-1">
                    <Select
                        label="Country"
                        withAsterisk
                        placeholder="Select a country"
                        searchable={true} // Ensure this is correctly passed
                        clearable
                        data={getAll()} // Ensure `getAll()` returns an array of objects [{ value: 'US', label: 'United States' }]
                        {...form.getInputProps("country")}
                    />
                    <TextInput
                    w={"100%"}
                    withAsterisk
                    label="City"
                    placeholder="City"
                    data={getAll()} // Ensure `getAll()` returns an array of objects [{ value: 'US', label: 'United States' }]
                    {...form.getInputProps("city")}
                    />
                    <TextInput
                    w={"100%"}
                    withAsterisk
                    label="Address"
                    placeholder="Address"
                    data={getAll()} // Ensure `getAll()` returns an array of objects [{ value: 'US', label: 'United States' }]
                    {...form.getInputProps("address")}
                    />
                </div>
            </div>
            {/* Right Section (Add more fields if needed) */}
            <div  className="flex-1">
                <Map address={address} city={city} country={country} />
            </div>
        </div>
        <Group justify="center" mt="xl">
                <Button type="submit">Next step</Button>
              </Group>
     </form>
    );
};

export default AddLocation;
  