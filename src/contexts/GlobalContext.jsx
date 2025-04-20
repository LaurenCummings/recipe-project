import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');

    return (
        <GlobalContext.Provider value={{ searchParam, setSearchParam }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;