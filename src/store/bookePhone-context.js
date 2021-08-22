import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider (props) {
    const [localData, setLocalData] = useState([]); 

    function addPhoneBook(phoneBook) {
        setLocalData((prevState) => { return prevState.concat(phoneBook)})
    }

    const state = {
        localData,
        addPhoneBook
    }

    return <Context.Provider value={state}>
        {props.children}
    </Context.Provider>

}

export default Context;
