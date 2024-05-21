import { useContext } from "react";
import { createContext } from "react"

const context = createContext();

const AppContext = ({ value, children }) => {

    return(
        <context.Provider value={value} >
            {children}
        </context.Provider>
    )
}

export const useAppContext = () => {
    const data = useContext(context);

    return data;
}

export default AppContext;
