// import React, { createContext, useContext, useState } from 'react'
// import Cookies from "js-cookie";

// export const AuthContext = createContext()
// export const Authprovider = ({children}) => {
//     const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");
//     // Parser the user data and storing in state.
//     const [authUser, setAuthUser] = useState(initialUserState? JSON.parse(initialUserState) : undefined);
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)
import React, { createContext, useContext, useState } from 'react';
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");
    let authUser;
    try {
        authUser = initialUserState ? JSON.parse(initialUserState) : undefined;
    } catch (error) {
        console.error('Error parsing user data:', error);
        authUser = undefined;
    }

    console.log('Parsed user data:', authUser);

    const [user, setUser] = useState(authUser);

    return (
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
