import React, { useState, useContext } from "react"

const UserContex = React.createContext()

export function useUser() {
    return useContext(UserContex)
}
 
const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    return (
        <UserContex.Provider value={{user, setUser}}>
            {children}
        </UserContex.Provider>
    )
}

export default UserProvider