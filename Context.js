import { createContext,useContext } from "react";

const Context = createContext();

export const CustomerContext = () => useContext(Context);

export default function AuthContext({ children}) {
    return <Context.Provider value={{}}>{children}</Context.Provider>
}