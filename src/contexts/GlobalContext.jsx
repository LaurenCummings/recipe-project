import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            setLoading(true);
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)

            const data = await res.json();
            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam('');
                navigate('/');
            }

        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    function handleAddToFavorites(currentItem) {
        let cpyFavorites = [...favorites];
        const index = cpyFavorites.findIndex((item) => item.id === currentItem.id);

        if (index === -1) {
            cpyFavorites.push(currentItem)
        } else {
            cpyFavorites.splice(index)
        }

        setFavorites(cpyFavorites);
    }

    return (
        <GlobalContext.Provider 
            value={{ 
                searchParam, 
                loading, 
                recipeList, 
                setSearchParam, 
                handleSubmit, 
                recipeDetailsData, 
                setRecipeDetailsData,
                handleAddToFavorites,
                favorites
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;