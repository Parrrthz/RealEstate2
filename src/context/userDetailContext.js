import { createContext } from "react";

const UserDetailContext = createContext()

export default UserDetailContext;


// import { createContext, useState } from "react";

// const UserDetailContext = createContext();

// export const UserDetailProvider = ({ children }) => {
//     const [userDetails, setUserDetails] = useState({});

//     return (
//         <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
//             {children}
//         </UserDetailContext.Provider>
//     );
// };

// export default UserDetailContext;
